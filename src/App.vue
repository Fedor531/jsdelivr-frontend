<template>
    <Header/>
    <component :is="layout">
        <router-view></router-view>
    </component>
    <Toast />
</template>

<script>
import Header from './components/organisms/Header';
import EmptyLayout from './layouts/EmptyLayout';
import MainLayout from './layouts/MainLayout';
import Toast from './components/organisms/Toast';
import { mapActions } from "vuex";

export default {
    components: { Toast, Header, EmptyLayout, MainLayout },
    computed: {
        layout() {
            return this.$route.meta.layout + '-layout';
        }
    },

    methods: {
        ...mapActions('auth', ['logout'])
    },

    watch: {
        // Logout
        async $route(e) {
            if (e.path === '/logout') {
                await this.logout();
                await this.$router.push('/login');
            }
        }
    }
}
</script>
