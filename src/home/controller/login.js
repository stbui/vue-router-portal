'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        let {gw_id, gw_address, gw_port, ip, mac, url} = this.get();

        let server_url = `http://${gw_address}:${gw_port}/wifidog/auth/?token=${think.uuid()}`;
        // return this.success(server_url);

        return this.display()
    }

    async noauthAction() {
        if (this.isJsonp()) {
            return this.jsonp({
                [errorConfig.key]: status,
                [errorConfig.msg]: message
            })
        } else if (this.isAjax()) {
            return this.fail(status, message);
        }

        let wifidogService = think.service('wifidog');
        let instance = new wifidogService('http://192.168.1.1');
        let result = await instance.run();

        return this.json('验证授权');
    }

}