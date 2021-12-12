<template>
    <header class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container d-flex">
            <Logo class="me-auto"/>
            <NavBar v-if="false" :navbar="navbar"/>
            <Loader class="header-loader" v-show="loading"/>
            <SearchForm/>
        </div>
    </header>
</template>

<script>
import NavBar from '../molecules/NavBar';
import SearchForm from '../molecules/SearchForm';
import { mapGetters } from 'vuex';

export default {
    name: 'Header',
    components: { SearchForm, NavBar },
    data() {
        return {
            navbar: [
                {
                    id: 1,
                    title: 'Главная',
                    path: '/'
                },
                {
                    id: 2,
                    title: 'О проекте',
                    path: '/about'
                }
            ]
        }
    },
    computed: {
        ...mapGetters({
            loading: 'loader/getLoading',
        })
    }
}
</script>

<style scoped lang="scss">
.header-loader {
    margin-right: 12px;
}
</style>
