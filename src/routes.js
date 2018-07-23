import Loadable from 'react-loadable'
import DelayLoading from './components/delay-loading'

const Home = Loadable({loader: () => import('./page/home'), loading : DelayLoading,delay:3000})
const UnAuthoried = Loadable({loader: () => import('./page/home/unAuthoried'), loading : DelayLoading,delay:3000})
const SelfApplyProdList = Loadable({loader: () => import('./page/self-apply-prodlist'), loading : DelayLoading,delay:3000})


export const authorizedRoutes = [{
    path: '/home',
    component: Home,
    exact : true,
    roles : ["admin","user"],
    unAuthoried : UnAuthoried
},{
    path : "/self_apply_prodlist",
    component : SelfApplyProdList,
    exact : true,
    roles : ["admin","user"]
}]