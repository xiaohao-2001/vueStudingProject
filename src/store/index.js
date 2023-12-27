//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import axios from "axios";
//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
    request(context, value) {
        console.log('执行了act')
        axios.post(`http://localhost:8080/MYSQL_war_exploded/CounterServlet2?${value}`)
            .then(
                response => {
                    context.commit('RPS', response.data)
                },
                error => {
                    console.log(error)
                }
            )
    },
}
//准备mutations——用于操作数据（state）
const mutations = {
    //response 响应
    RPS(state, value) {
        console.log('执行了mut')
        state.requestData = value
        console.log('state的值', this.state.requestData)
    },
}
//准备state——用于存储数据
const state = {
    requestData: '' //值
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})