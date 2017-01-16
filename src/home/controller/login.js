'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        let {gw_id, gw_address, gw_port, ip, mac, url} = this.get();

        let server_url =`http://${gw_address}:${gw_port}/wifidog/auth/?token=${think.uuid()}`;
        return this.success(server_url);
    }

}