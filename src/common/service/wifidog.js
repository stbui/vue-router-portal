'use strict';

import request from 'request';

export default class extends think.service.base {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36';

    init(url) {
        // super.init();
        this.url = url;
    }

    getContent() {
        let fn = think.promisify(request, request);
        let response = fn(this.url).catch(() => {
            let errorConfig = think.config('error');
            return {
                [errorConfig.key]: 500,
                [errorConfig.msg]: '服务异常',
                data: this.url
            };
        });

        return response;
    }

    async run() {
        if (!this.url) {
            throw new Error(`url must be set`);
        }

        let content = await this.getContent();
        return content;
    }
}