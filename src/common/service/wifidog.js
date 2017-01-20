'use strict';

import request from 'request';

export default class extends think.service.base {
    userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36';

    /**
     * init
     * @return {}         []
     */
    init(url) {
        // super.init();
        this.url = url;
    }

    // getContent() {
    //     let fn = think.promisify(request.get, request);
    //
    //     return fn({
    //         url: this.url,
    //         gzip: true,
    //         headers: {
    //             'User-Agent': this.userAgent
    //         }
    //     }).then((response)=> {
    //
    //     }).catch(()=> {
    //         return 'error!';
    //     });
    //
    // }

    getContent() {
        let fn = think.promisify(request.get, request);

        return fn(this.url).then((response)=>{
            // console.log(response)
          return response;
        }).catch(()=>{
            return 'error!';
        });
    }

    async run() {
        if(!this.url) {
            throw new Error(`url must be set`);
        }

        let content = await this.getContent();
        return content;
    }
}