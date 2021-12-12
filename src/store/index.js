import { createStore } from 'vuex';
import { postModule } from './postModule';
import { packageModule } from './packageModule'
import { loaderModule } from './loaderModule';

export default createStore({
    modules: {
        loader: loaderModule,
        post: postModule,
        package: packageModule
    }
})
