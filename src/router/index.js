// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import Login from '../components/Login'
import Index from "../components/Index";
import UserData from '../pages/UserData'
import AddUser from "../pages/AddUser";
import ListData from "../pages/ListData";
import ListEdit from "../pages/ListEdit";
import SaveMoney from "../pages/SaveMoney";
import Wait from "../pages/Wait";


//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name: 'Login',
            path: '/Login',
            component: Login
        },
        {
            name: 'Index',
            path: '/Index',
            component: Index,
            children: [
                {
                    name: 'UserData',
                    path: 'UserData',
                    component: UserData,
                },
                {
                    name: 'AddUser',
                    path: 'AddUser',
                    component: AddUser,
                },
                {
                    name: 'ListData',
                    path: 'ListData',
                    component: ListData,
                    props($route){
                        return {userdata:$route.query.userdata}
                    }
                },
                {
                    name: 'ListEdit',
                    path: 'ListEdit',
                    component: ListEdit,
                    props($route){
                        return {userdata:$route.query.userdata}
                    }
                },
                {
                    name: 'SaveMoney',
                    path: 'SaveMoney',
                    component: SaveMoney,
                    props($route){
                        return {userdata:$route.query.userdata}
                    }
                },
                {
                    name: 'Wait',
                    path: 'Wait',
                    component: Wait,
                },
            ]
        },
    ]
})
