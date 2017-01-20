var element = {
    create: function (tagName, props, children) {

    },
    createElement: function (str, attr) {
        if (!str || typeof attr !== 'object') {
            new Error('params empty');
        }

        var obj = document.createElement(str);

        for (var i in attr) {
            obj.setAttribute(i, attr[i]);
        }

        return obj;
    },
    render: function (domObj) {
        var domElement = this.createElement(domObj.tagName, domObj.props);

        var children = domObj.children || [];
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var ele = child.tagName !== undefined ? this.render(child) : document.createTextNode(child);

            domElement.appendChild(ele);
        }

        return domElement;
    },
    insertElement: function (parentElement, childElement) {
        return parentElement.appendChild(childElement);
    }
}


function home() {
    var body = document.getElementsByTagName('body')[0];
    var dom = element.render({
        tagName:'div', props:{class:'test'},children:[
            {tagName:'div', children:['test']}
        ]
    });

    element.insertElement(body,dom);
}

/***********************/

function Router() {
    this.routes = [];
    this.curUrl = '';

    this.route = function (path, callback) {
//            this.routes[path] = callback || function(){};

        callback = callback || function () {};
        this.routes.push({re: path, handler: callback});
    };

    this.refresh = function () {
        this.curUrl = location.hash.slice(1) || '/';

        var fragment = this.getFragment();

        for (var i = 0; i < this.routes.length; i++) {
            var match = this.curUrl.match(this.routes[i].re);

            if (match && match[0] != '/') {
                this.routes[i].handler.call(this, fragment);
            }
        }
    };

    this.getFragment = function () {
        var match = window.location.href.match(/#(.*)$/);
        var fragment = match ? match[1] : '';
        var reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
        var result = {};
        var match;
        var key;
        var value;
        while (match = reg.exec(fragment)) {
            key = match[2];
            value = match[3] || '';
            result[key] = decodeURIComponent(value);
        }

        return result;
    };

    this.check = function () {
        console.log(this.routes);
        for (var i = 0; i < this.routes.length; i++) {
            console.log(this.routes);
        }
    };

    this.init = function () {
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    };

}

var R = new Router();
R.init();
R.route('/', function () {
    console.log('/');

    home();
});
R.route('/login/', function (options) {
    var token = Math.random()*100000000000000000;
    options.token = token;
    localStorage.setItem('options', JSON.stringify(options));

    var html = '名称：' + options.gw_id;
    html += '<br>网关：' + options.gw_address;
    html += ':' + options.gw_port;
    html += '<br>客户端IP：' + options.ip;
    html += '<br>客户端MAC：' + options.mac;
    html += '<br>访问链接：' + options.url;
    /*var options = JSON.parse(localStorage.getItem('options'));

     var url = 'http://' + options.gw_address + ':' + options.gw_port + '/wifidog/auth/?token='+options.token;

     console.log('/auth/', url);*/
    home();
});
R.route('/auth/', function () {
    console.log('/auth/');
    document.getElementsByTagName('html')[0].innerHTML = 'Auth:1\nMessages: Allow Access\n';
});
R.route('/portal/', function (options) {
    document.getElementsByTagName('body')[0].innerHTML = '授权成功，您可以开始上网了';
    console.log('/portal/', options, this);
});
R.route('/ping/', function () {
    console.log('/ping/', this)
});
