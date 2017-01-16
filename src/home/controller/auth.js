'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    let {gw_id, gw_address, gw_port, ip, mac, url, token} = this.get();

    return this.json('Auth: 1\nMessages: Allow Access\n');
  }

}