# mixin
        混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。
        
        组件 的 属性、methods 中的  函数 优先级高于 mixin 属性 、函数 优先级，mixins 与 组件中 存在相同 属性、函数 则被 组件 的 属性、函数 覆盖，不同则追加

        生命周期（类数组合并）：相同名字的钩子函数都执行，mixins 中的钩子优先执行


## 在 vue 3 中不推荐使用 mixin 建议使用 Composition API  进行代替
    因为 Composition API 的可维护性更高


## $options （了解）
    vue 的应用、组件所有的内容在处理之后都会挂 在 $options 上面，获取 自定义属性 可以通过 this.$options.xxx ( xxx 为属性名 ) 

    修改 mixin 与 组件 中 自定义属性 优先级
        可以 通过 对 xxx 实例中的 config 中的 optionMergeStragies 做配置（对自定义属性的合并策略进行修改）

        xxx.config.optionMergeStragies.yyy =(mixinVal,appValue)=>{  // 修改 yyy 自定义属
            return mixinVal || appValue // 需要 那个 的优先级 高 就将其放在前面
        }

```JavaScript
    // 新建 mixin 混入 （局部）
    const myMixin={
        data(){
            return { number:2,count:2 }
        }
    }


    const app =Vue.createApp({
        nameJs:6,   // 自定义一个 nameJs 属性
        data(){
            return { number:1 }
        },
        mixins:[ myMixin ], // 将新建 的 mixin 混入 到 vue 中，使用 局部的 mixin 需要通过此方法使用，全局则不需要，该组件下面所有的子组件都可以使用 mixin，反之 局部的子组件则都需要用此方法引入再使用
        methods:{
            handleClick(){
                console.log('handleClick')
            }
        },
        template:`
            <div>
                <div>{{number}}</div>   //  显示 vue data 中 属性的值==> 1
                <div>{{count}}</div>    //  显示 mixins data 中的属性的值===> 2
                <div>{{this.$options.nameJs}}</div>    //  调用 自定义属性
                <button @click="handleClick">增加</button>
            </div>
        `
    })

    // 新建 mixin 混入 （全局，一般不推荐使用）
    // app.mixin({
        
    // })


    // 将 mixin 中 自定义属性 的优先级 提到 组件得自定义属性前面 
    app.config.optionMergeStragies.nameJs=(mixinVal,appValue)=>{ 
        return mixinVal || appValue
    }

    const vm =app.mount('#root')
```