<template>
    <header class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container d-flex">
            <Logo class="me-auto"/>
            <Loader class="header-loader" v-show="loading"/>
            <NavBar :navbar="getNavbar"/>
        </div>
    </header>
</template>

<script>
import NavBar from '../molecules/NavBar';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Header',
    components: { NavBar },
    computed: {
        ...mapGetters({
            loading: 'loader/getLoading',
            isAuth: 'auth/getAuth',
            info: 'info/getInfo'
        }),

        getNavbar() {
            if (this.isAuth) {
                return [
                    {
                        id: 1,
                        type: 'link',
                        title: 'Главная',
                        path: '/'
                    },
                    {
                        id: 2,
                        type: 'dropdown',
                        title: this.info.name ?? 'Пользователь',
                        links: [
                            {
                                id: 1,
                                type: 'link',
                                path: '/history',
                                title: 'История поисков',
                            },
                            {
                                id: 2,
                                type: 'link',
                                path: '/logout',
                                title: 'Выйти',
                            }
                        ]
                    }
                ]
            }
            else {
                return [
                    {
                        id: 1,
                        type: 'link',
                        title: 'Главная',
                        path: '/'
                    },
                    {
                        id: 2,
                        type: 'link',
                        title: 'Войти',
                        path: '/login'
                    }
                ]
            }
        }
    }
}
</script>

<style scoped lang="scss">
.navbar {
    background: #fff;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .08);
}

.header-loader {
    margin-right: 12px;
}
</style>
