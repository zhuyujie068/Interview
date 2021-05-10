# render（了解）
    template 在底层被编译后 会生成 render 函数
    template -> render -> h -> 虚拟DOM（js对象）-> 真实 DOM -> 展示到页面上
[render 的 详细介绍](https://www.jianshu.com/p/7508d2a114d3)


```JavaScript
    const app=Vue.createApp({
        template: ` 
           <my-title :level="2">  
                hello
           </my-title>
        `
    });

    app.component('my-title',{
        props:['level'],

        render(){ 
            const { h } = vue; // 调用 vue 的 h 方法

            // 返回的是 虚拟DOM (虚拟DOM 是 通过js对象来表示这个标签，对真实DOM的映射)
            // 第一个参数表示的是 虚拟DOM 是什么，第二个参数是对象 表示该标签上面有哪些属性，第三个参数是 该标签中的 文本（也可以是数组，里面还可以嵌套 虚拟DOM）
            return h ('h'+this.level,{},this.$slots.default()) // this.$slots.default() 获取默认插槽的内容
        }

        // render() 函数实现的效果和 template 一样 

        // template:`
        //     <h1 if="level===1"><slot /></h1>
        //     <h2 if="level===2"><slot /></h2>
        //     <h3 if="level===3"><slot /></h3>
        //     <h4 if="level===4"><slot /></h4>
        // `
    })

    const vm =app.mount('#root')
```