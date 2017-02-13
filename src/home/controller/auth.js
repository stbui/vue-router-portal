'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let {gw_id, gw_address, gw_port, ip, mac, url, token, stage, message} = this.get();
        // console.log(this.get());

        if (stage == 'login') {
            // 登录认证
            think.log('登录认证', '[WIFIDOG]');
            // 已经注册过的用户
            // 未注册的用户，临时放行，参数 message: allow
            let memberModel = await this.model('member').where({token}).find();
            think.log(memberModel, 'data');
            if (!think.isEmpty(memberModel)) {
                if (token == memberModel.token) {
                    think.log('登录成功', '[WIFIDOG]');
                    return this.json('Auth: 1\nMessages: Allow Access\n');
                } else if (!think.isEmpty(message) && message == 'allow') {
                    think.log('登录成功', '[WIFIDOG]');
                    return this.json('Auth: 1\nMessages: Allow Access\n');
                } else {
                    think.log('认证失败', '[WIFIDOG]');
                    return this.json('Auth: 0\nMessages: Allow Access\n');
                }
            } else {
                think.log('认证失败', '[SQL]');
                return this.json('Auth: 0\nMessages: Allow Access\n');
            }
        } else if (stage == 'counters') {
            // 心跳认证
            think.log('心跳认证', '[WIFIDOG]');
            think.log(this.get());

            // let memberModel = this.model('member').where({token}).find();
            // if(!think.isEmpty(memberModel)) {
            //     // 流量
            // }
        } else if (stage == 'logout') {
            think.log('设备下线', '[WIFIDOG]');
            let memberModel = this.model('member').where({token}).find();
            if (!think.isEmpty(memberModel)) {
                return this.json('Auth: 0\nMessages: Allow Access\n');
            }
        }
    }
}