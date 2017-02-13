'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        let errorConfig = this.config('error');
        if (this.isJsonp()) {
            return this.jsonp({
                [errorConfig.key]: 0,
                [errorConfig.msg]: '操作成功'
            })
        } else if (this.isAjax()) {
            return this.success('操作成功');
        }

        return this.display('index/index')
    }

}