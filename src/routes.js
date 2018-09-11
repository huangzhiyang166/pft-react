import Loadable from 'react-loadable'
import DelayLoading from './components/delay-loading'

const Home = Loadable({
    loader: () => import(/* webpackChunkName: 'home' */'./page/home'),
    loading : DelayLoading,
    delay:3000
})
const SelfApplyProdList = Loadable({
    loader: () => import(/* webpackChunkName: 'SelfApplyProdList' */'./page/self-apply-prodlist'), 
    loading : DelayLoading,
    delay:3000
})




export const authRoute = [{
    path: '/',
    exact : true,
    redirect : "/home"
},{
    path: '/home',
    component: Home,
    exact : true,
    roles : ["admin","user"],
},{
    path: '/self_apply_prodlist',
    component: SelfApplyProdList,
    exact : true,
    roles : ["admin","user"],
}]
