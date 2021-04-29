"use strict";
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
// 命名空间，将所有的变量进行包裹，外界就无法进行访问，需要通过 export 将需要外界引用的变量进行暴露 （可以理解为 模块化 ,可以减少变量污染）
//  使用  /// <reference path="xxx.ts"/>  说明 该命名空间 依赖于 xxx.ts 文件里的东西，作用只是突出 了解 该文件 与 其他文件的依赖关系，可以不写，不会响应其业务逻辑 
/// <reference path="./components.ts"/>
var Home;
(function (Home) {
    // 将 page 类，向外界进行暴露
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
