'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        return this.display('index/index')
    }

    async noauthAction() {
        // if (this.isJsonp()) {
        //     return this.jsonp({
        //         [errorConfig.key]: status,
        //         [errorConfig.msg]: message
        //     })
        // } else if (this.isAjax()) {
        //     return this.fail(status, message);
        // }
        //
        // let wifidogService = think.service('wifidog');
        // let instance = new wifidogService('http://192.168.1.1:2060/wifidog/auth?token=4b09611ed4feb691d61d771b31ae5d60');
        // let result = await instance.run();
        //
        // return this.json('验证授权');
    }

}