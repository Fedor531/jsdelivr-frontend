import { createStore } from 'vuex';
import { xpackage } from './modules/package';
import { loader } from './modules/loader';
import { modal } from './modules/modal';
import { auth } from './modules/auth';
import { error } from './modules/error';
import { info } from './modules/info';

export default createStore({
    modules: {
        loader,
        package: xpackage,
        modal,
        auth,
        error,
        info
    }
})
