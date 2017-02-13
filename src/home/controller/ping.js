'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   *
   * 在每次wifidog启动的时候都会首先通过ping协议判断认证服务器是否在线
   */
  indexAction(){
    let params = this.get();
    let {gw_id, sys_uptime, sys_memfree, sys_load, wifidog_uptime} = params;

    return this.json('Pong');
  }
}