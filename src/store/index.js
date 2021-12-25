import { createStore } from 'vuex';
import xpackage from './modules/package';
import loader   from './modules/loader';
import modal    from './modules/modal';
import auth     from './modules/auth';
import toast    from './modules/toast';
import info     from './modules/info';
import history  from './modules/history'

export default createStore({
    modules: {
        loader,
        package: xpackage,
        modal,
        auth,
        toast,
        info,
        history
    }
})
