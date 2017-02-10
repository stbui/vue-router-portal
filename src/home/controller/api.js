'use strict';

import Base from './base.js';
import request from 'request';

export default class extends Base {

    indexAction() {
        return this.display('index/index');
    }

    loginAction() {
        return this.success();
    }

    siginAction() {

    }

    /*
     * 允许上网
     * */
    async authAction() {
        let cookie = this.cookie('rp-info');

        think.log('cookie：', '[Cookie]');
        think.log(cookie);

        if (think.isEmpty(cookie)) {
            return this.fail('认证失败');
        }

        let {gw_port, gw_address} = JSON.parse(cookie);
        let token = think.uuid();
        let url = `http://${gw_address}:${gw_port}/wifidog/auth?token=${token}`;

        let wifidogService = think.service('wifidog');
        let instance = new wifidogService(url);
        let result = await instance.run();

        // wifidog服务器异常
        let errorConfig = this.config('error');
        if (result[errorConfig.key] == 500) {
            return this.fail('认证失败');
        }

        try {
            // 授权失败数据对象
            result = JSON.parse(result.body);
            if (result && result.errno == 1000) {
                return this.fail('认证失败');
            }
        } catch (e) {
            // console.log('数据格式不符');
        }

        return this.success(JSON.parse(cookie), '认证成功');
    }

    portalAction() {
        this.redirect('/');
    }
}