//  ts 直接引用 js , 需要安装 一个 翻译文件  ( .d.ts )


// SuperAgent 轻量的Ajax API
import superagent from 'superagent';

// cheerio  cheerio是nodejs的抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现。适合各种Web爬虫程序。
import cheerio from 'cheerio'


class Crowller {
    private type = 'js';
    private url = `http://beige.world/tutorial/${this.type}.html`;

    // 获取要爬取的 HTML
    async getRawHtml() {
        const result = await superagent.get(this.url);
        this.getCouresInfo(result.text)
    }

    // 使用 cheerio 获取 元素
    getCouresInfo(html: string) {
        const $ = cheerio.load(html);
        const courseItems = $('.page ul li')
        console.log(courseItems)
    }

    constructor() {
        this.getRawHtml();
    }
}

const crowller = new Crowller();





