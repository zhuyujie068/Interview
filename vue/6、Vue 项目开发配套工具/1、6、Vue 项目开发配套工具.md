# Vue Cli
    卸载
        npm uninstall vue-cli -g
        yarn global remove vue-cli

    安装
        npm i -g @vue/cli


# vuex 
    Vuex 创建了一个全局唯一的仓库，用来存放全局的数据

    mutation 里面只允许写同步代码，不允许写异步代码，异步代码放在 action 里面进行

    dispatch 和 actions 做关联

    commit 和 mutation 做关联


    同步修改数据：
        可以直接 在页面, 通过 this.$store.commit('xxx') , ( commit 提交一个叫做 xxx 的数据改变 )

    异步修改数据：
        1、dispatch 方法，派发一个 action，名字叫做 xxx
        2、感知到 xxx 这个 action，执行 store 中 actions 下面的 xxx 方法
        3、commit 提交一个叫做 xxx 的数据改变
        4、mutation 感知到提交的 xxx 改变，执行 xxx 方法改变数据


**VueX 的 index 文件**
```JavaScript
import { createStore } from 'vuex' // 创建 createStore
export default createStore({
    state:{ name:zyj }, // 声明一个变量
    mutations:{
        change(state,str){
            state.name=str;
        }
    },
    actions：{
        change(store,str){
            setTimeout(()=>{
                store.commit('change',str)
            },2000)
        }
    }
})
```

**页面使用**
```JavaScript
import { createStore } from 'vuex' // 创建 createStore
export default createStore({
    state:{ name:zyj }, // 声明一个变量
    mutations:{
        change(state,str){
            state.name=str;
        }
    },
    actions：{
        change(store,str){
            setTimeout(()=>{
                store.commit('change',str)
            },2000)
        }
    }
})
```


