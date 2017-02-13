'use strict';

import Base from './base.js';
import request from 'request';

export default class extends Base {

    indexAction() {
        return this.display('index/index');
    }

    async verifydeviceAction() {
        let {username, password}= this.param();
        let memberModel = await this.model('member').where({username, password}).find();
        think.log(memberModel, 'data');
        if (!think.isEmpty(memberModel)) {
            this.session('userInfo', memberModel);
            return this.success({username}, '登录成功');
        }

        // 注册
        let data = {username, password, token: think.uuid(), login_ip: this.ip(), add_date: +new Date()};
        // 插入数据
        let result = await this.model('member').thenAdd(data, {username});
        if (result.type == 'exist') {
            return this.fail('登录失败');
        }

        this.session('userInfo', data);
        return this.success({username}, '注册成功');
    }


    loginAction() {
        return this.siginAction();
    }

    async siginAction() {
        let params = this.param();
        let {username, password}= params;
        let memberModel = await this.model('member').where({username, password}).find();
        think.log(memberModel, 'data');
        if (!think.isEmpty(memberModel)) {
            await this.session('userInfo', memberModel);
            return this.success({username}, '登录成功');
        } else {
            return this.fail('登录失败');
        }
    }

    userAction() {
        return this.regAction();
    }

    async regAction() {
        let params = this.param();
        let {username, password}= params;
        let data = {username, password, token: think.uuid(), login_ip: this.ip(), add_date: +new Date()};
        // 插入数据
        let result = await this.model('member').thenAdd(data, {username});
        if (result.type == 'exist') {
            return this.fail('用户已注册');
        }

        this.session('userInfo', data);

        return this.success({username}, '注册成功');
    }

    /*
     * 允许上网
     * */
    async authAction() {
        // return this.auth();
        return this.directAction();
    }

    async directAction() {
        const cookie = this.cookie('rp-info');

        think.log('cookie：', '[Cookie]');
        think.log(cookie);

        if (think.isEmpty(cookie)) {
            return this.fail('认证失败');
        }

        // 查询当前用户token
        const userInfo = await this.session('userInfo');
        think.log(userInfo, 'Session');
        let {token} = userInfo;
        let {gw_port, gw_address } = JSON.parse(cookie);
        let url = `http://${gw_address}:${gw_port}/wifidog/auth?token=${token}`;
        think.log(url, 'Wifidog');

        let data = JSON.parse(cookie);
        data.token = token;
        data.serverUrl = url;

        return this.success(data, '操作成功');
    }

    async auth() {
        const cookie = this.cookie('rp-info');

        think.log('cookie：', '[Cookie]');
        think.log(cookie);

        if (think.isEmpty(cookie)) {
            return this.fail('认证失败');
        }

        // 查询当前用户token
        const userInfo = await this.session('userInfo');
        think.log(userInfo, 'Session');
        let {token} = userInfo;
        // let token = think.uuid();
        let {gw_port, gw_address } = JSON.parse(cookie);
        let url = `http://${gw_address}:${gw_port}/wifidog/auth?token=${token}`;
        think.log(url, 'Wifidog');

        // bug: 估计wifidog要拿客户端的ip进行mac地址匹配，只能通过浏览器发送请求
        let wifidogService = think.service('wifidog');
        let instance = new wifidogService(url);
        let result = await instance.run();

        // wifidog服务器异常
        let errorConfig = this.config('error');
        if (result[errorConfig.key] == 500) {
            return this.fail(500, '认证失败');
        }

        try {
            // 授权失败数据对象
            result = JSON.parse(result.body);
            console.log(result);
            if (result && result.errno == 1000) {
                return this.fail('认证失败');
            }
        } catch (e) {
            // console.log('数据格式不符');
        }

        let data = JSON.parse(cookie);
        data.token = token;

        // return this.json(result);
        return this.success(data, '认证成功');
    }


    portalAction() {
        this.redirect('/');
    }
}