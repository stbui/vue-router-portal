'use strict';

import Base from './base.js';
import request from 'request';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        return this.display('index/index');
    }

    loginAction() {
        return this.success();
    }

    siginAction() {

    }

    async authAction() {
        let cookie = this.cookie('rp-info');
        let {gw_port, gw_address} = JSON.parse(cookie);
        let url = `http://${gw_address}:${gw_port}/wifidog/auth/?tonken=4b09611ed4feb691d61d771b31ae5d60`;

        // 192.168.1.1:2060/wifidog/auth?token=4b09611ed4feb691d61d771b31ae5d60

        // console.log('cookie', cookie, url);
        // url = 'http://192.168.1.165/portal/?gw_id=cnweaks';
        //
        // let service = think.service('wifidog')
        // let instance = new service(url);
        // let result = await instance.run();

        return this.json('验证');
    }

    portalAction() {
        this.redirect('/static/museui-demo/dist/');
    }
}