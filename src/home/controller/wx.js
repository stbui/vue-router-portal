'use strict';

import Base from './base.js';

export default class extends Base {

    indexAction() {
        return this.display('index/index');
    }

    /*
    * 微信发起请求认证，通过要返回302重定向
    * */
    authAction() {
        let params = this.get();
        let {openId, tid, extend, sigin, timestamp} = params;
        console.log(params);

        let token = think.uuid();
        let url = `http://192.168.1.1:2060/wifidog/auth?token=${token}`;
        return this.redirect(url);

        // this.status(302);
        // return this.success('微信认证成功');
        // return this.redirect('/wx/auth');
    }

}