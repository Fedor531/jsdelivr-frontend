import { createStore } from 'vuex';
import { xpackage } from './modules/package'
import { loader } from './modules/loader';
import { modal } from './modules/modal';

export default createStore({
    modules: {
        loader,
        package: xpackage,
        modal
    }
})
