'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let url = 'http://192.168.1.1:2060/wifidog/status';
        let wifidogService = think.service('wifidog');
        let instance = new wifidogService(url);
        let result = await instance.run();

        let body = result.body;
        body = body.match(/<pre>([\s\S]+?)([^<>]+)<\/pre>/g)[0];

        let status = {
            version: null,
            uptime: null,
            internet: null,
            authServer: null,
            clients: null
        }

        body.replace(/Version: (.*)/g, function ($0, $1) {
            status.version = $1;
        });

        body.replace(/Uptime: (.*)/g, function ($0, $1) {
            status.uptime = $1;
        });

        body.replace(/Internet Connectivity: (yes|no)/g, function ($0, $1) {
            status.internet = $1;
        });
        body.replace(/Auth server reachable: (yes|no)/g, function ($0, $1) {
            status.authServer = $1
        });
        body.replace(/Clients served this session: ([\s\S])/g, function ($0, $1) {
            status.clients = $1;
        });

        console.log(body);
        return this.success(status);
        // return this.display('index/index');
    }

}