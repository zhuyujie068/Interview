// ES6 模块化 引入
import $ from 'jquery';

$(function () {
    $('body').html('<div>123</div>');
    new $.fn.init();
})