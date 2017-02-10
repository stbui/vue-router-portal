'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    let {gw_id, gw_address, gw_port, ip, mac, url, token, stage} = this.get();


    if(stage == 'login') {
      // 登录认证
      think.log('登录认证','[WIFIDOG]');

      //

    } else if(stage == 'counters') {
      // 心跳认证
      think.log('心跳认证','[WIFIDOG]');
    } else  if(stage == 'logout') {
      think.log('设备下线','[WIFIDOG]');
    }

    console.log(this.get());

    return this.json('Auth: 1\nMessages: Allow Access\n');
  }

}