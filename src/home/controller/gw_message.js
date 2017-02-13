'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 若验证失败，则会根据失败原因跳转至如下页面
   * denied|activate|failed_validation
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