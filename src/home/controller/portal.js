'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    // 192.168.1.1:2060/wifidog/auth?token=4b09611ed4feb691d61d771b31ae5d60
    let get = this.get();
    // return this.success(get,'授权成功');
    return this.display('index/index')
  }

}