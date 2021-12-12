<template>
    <Header/>
    <main class="container">
        <router-view></router-view>
    </main>
    <Footer />
</template>

<script>
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

export default {
    components: { Footer, Header }
}
</script>

<style lang="scss">
</style>

