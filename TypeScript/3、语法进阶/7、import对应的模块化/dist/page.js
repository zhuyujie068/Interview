define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 不使用 命名空间 ，使用 ES 的 import 方法
    // 由于是 将所有的 js 文件打包 合并到一个文件，所以 tsconfig.json 的 module 是采用 amd 模式进行
    // 在没有使用 webpack 进行配置，所以要在 index.html 文件中使用时 需要 先引用 <script src="http://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js"></script> 来 识别解码 amd 的模块化  define 语法 
    /*
    
        // page 指的是导出的 exports 对象
        require(['page'], function (page) {
            new page.default() // 进行实例使用
        })
    
    */
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
