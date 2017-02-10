'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    let params = this.get();
    if(params.message == 'denied') {
      return this.fail('认证失败');
    } else {
      return this.success('','认证成功');
    }
  }

}