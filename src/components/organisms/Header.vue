<template>
    <header class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Logo />
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <NavBar :navbar="navbar"/>
                <SearchForm />
            </div>
        </div>
    </header>
</template>

<script>
import NavBar from '../molecules/NavBar';
import Logo from '../atoms/Logo';
import SearchForm from "../molecules/SearchForm";

export default {
    name: 'Header',
    components: { SearchForm, Logo, NavBar },
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
    }
}
</script>

<style scoped>

</style>
