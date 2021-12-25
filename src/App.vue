<template>
    <div class="main-loader"  v-if="!appLoaded">
        <Loader />
    </div>
    <template v-else>
        <Header/>
        <component :is="layout">
            <router-view></router-view>
        </component>
        <ErrorToast/>
    </template>
</template>

<script>
import Header from './components/organisms/Header';
import EmptyLayout from './layouts/EmptyLayout';
import MainLayout from './layouts/MainLayout';
import ErrorToast from './components/organisms/ErrorToast';
import { mapActions, mapMutations } from 'vuex';
import firebase from 'firebase/compat/app';

export default {
    components: { ErrorToast, Header, EmptyLayout, MainLayout },
    data() {
        return {
            appLoaded: false
        }
    },
    computed: {
        layout() {
            return this.$route.meta.layout + '-layout';
        }
    },

    created() {
        this.checkAuth();
    },

    methods: {
        ...mapMutations('auth', ['setAuth']),
        ...mapActions({
            'logout': 'auth/logout',
            'fetchInfo': 'info/fetchInfo'
        }),

        checkAuth() {
            firebase.auth().onAuthStateChanged(async (user) => {
                if (user) {
                    this.setAuth(true);
                    await this.fetchInfo();

                    this.appLoaded = true
                }
                else {
                    this.appLoaded = true
                }
            });
        }
    },

    watch: {
        // Logout
        async $route(e) {
            if (e.path === '/logout') {
                await this.logout();
            }
        }
    }
}
</script>

<style scoped lang="scss">
.main-loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
