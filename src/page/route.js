import Loadable from 'react-loadable'
import DelayLoading from '../components/delay-loading'

const Home = Loadable({loader: () => import('./home'), loading : DelayLoading,delay:3000})
const SelfApplyProdList = Loadable({loader: () => import('./self-apply-prodlist'), loading : DelayLoading,delay:3000})


export default[{
    path: '/home',
    component: Home
},{
    path : "/self_apply_prodlist",
    component : SelfApplyProdList
}]