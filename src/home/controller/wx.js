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
        this.status(302);
        // return this.json('')
        return this.redirect('/wx/auth');
    }

}