<template>
    <Header/>
    <component :is="layout">
        <router-view></router-view>
    </component>
    <ErrorToast />
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
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setAuth(true);
                    this.fetchInfo();
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
