# 组件的定义
    组件具备复用性
**全局组件**，只要定义了，处处可以使用，性能不高，但是使用起来简单

**局部组件**，定义了，要注册之后才能使用，性能比较高，使用有些麻烦



# 父子组件传参

## 单项数据流
    子组件可以使用父组件传递过来的数据，但是绝对不能修改传递过来的数据

## 在 prors 定义传递的参数时进行检验:
    type        参数类型 (String、Boolean、Array、Object、Function，Symbol)
    required    必填
    default     默认值
    validator   对值进行自定义检验
如：
```JavaScript
    props:{  //如果不对 传递的参数进行处理， props 可以使用 数组 进行接收 [xx,xx,xx]
        content:{
            type:Number,
            validator:function(val){
                return val<1000; // 传入的参数需要小于 1000
            },
            default:function(){
                return 100;
            }
        }
    }
```

## 传递多个参数
当往子组件中传递多个参数时可以将其放入 对象 中，通过 v-bind 进行统一传递
```JavaScript
    const app=Vue.createApp({
        data(){
            return{
                // 将要传递的参数 放入该对象中
                params:{
                    a:123,
                    b:456,
                    c:789
                }
            }
        },
        template:`
        <div>
            // 通过 v-bind 将 params 对象 传递 给子组件
            <test v-bind="params" />  

            // 等于 ==> <test :a="params.a" :b="params.b" :c="params.c" />
        </div>`
    });

    app.component('test',{
        props:['a','b','c'],
        template:`<div>{{a}}--{{b}}--{{c}}</div>`  // 123--456--789
    })

    const vm =app.mount('#root')
```

**当父组件向 子组件传递的 属性 为'hello-word' 命名 其 子组件 接收 命名为 helloWord** （HTML 不支持 驼峰命名，可用 - 进行分割代替，js 反之）



## Non-props 属性
    non-props 属性一般用于 父组件 向 子组件 设置 样式


### 子组件只有一个根节点时
    父组件向子组件传值，子组件不通过 props 进行接收(也就是不写接收的语法)，vue 会把 父组件传递过来的 值 放在 子组件最外层 dom 标签里，变成 子组件 最外层 dom 标签的 属性（当然也可以在 子组件 中 将 inheritAttrs 设置为 false 拒绝继承 父组件传递过来的 值）。

 
```JavaScript
    const app=Vue.createApp({
        template:
        `
            <div>
                <counter msg="hello" />  // ==> 在页面上该组件被渲染成 <div msg="hello">Counter</div>
            </div>
        `
    });

    app.component('counter',{
        // inheritAttrs:false, // 不继承 父组件传递过来的 Non-props 属性
        template:`<div>Counter</div>`
    })

    const vm =app.mount('#root')
```

### 子组件有多个根节点时
    如果想要继承 Non-props 可以在 需要继承的 根节点上面 使用 v-bind 绑定 $attrs ,该节点 会 继承父组件传递的所有的值，在子组件函数中可以通过 this.$attrs 父组件传递的值  

``` JavaScript 

    const app=Vue.createApp({
        template:
        `
            <div>
                <counter msg="hello" name="zyj" />
            </div>
        ` 
    });

    app.component('counter',{
        mounted(){
            console.log(this.$attrs) // 获取 父组件传递的所有值
        },
        template:
        `
            <div v-bind:msg="$attrs.msg">Counter</div> // 只继承 父组件 传递的 msg 值
            <div v-bind="$attrs">Counter</div>  // 继承 父组件传递过来的所有值
            <div>Counter</div>
        `
    })

    const vm =app.mount('#root')

```

### 子组件修改父组件传递的参数
    
``` JavaScript 

    const app=Vue.createApp({
        data(){
            return{
                count:1
            }
        },
        methods:{
            add(param){
                this.count +=param;
            }
        },
        template:
        `
            <div>
                // 监听 handleAdd 事件的触发，触发时调用 add 函数
                <counter :count="count" @handleAdd="add" />
            </div>
        ` 
    });

    app.component('counter',{
        props:['count'],
        // emits 可不写，主要用于 展示 子组件 触发了 父组件哪些方法，方便查看，也 可以写成 对象 当 触发时进行 一些处理（了解即可）
        // emits:['handleClick'],
        emits:{
            handleAdd:(val)=>{
                // 当要 触发 父组件 该函数时，对传递的 参数进行 判断，如果返回 false 控制台会进行警告
                if(val>0){
                    return true
                }
                return false
            }
        }
        methods:{
            handleClick(){
                // 触发 父组件 handleAdd 事件，并 传递 参数
                this.$emit('handleAdd',2)
            }
        },
        template:
        `
            <div @click="handleClick">{{count}}</div>
        `
    })

    const vm =app.mount('#root')

```