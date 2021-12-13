<template>
    <Header/>
    <main class="container">
        <router-view></router-view>
    </main>
    <Footer/>
    <Modal/>
</template>

<script>
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Modal from './components/organisms/Modal';

export default {
    components: { Modal, Footer, Header }
}
</script>

<style lang="scss">
</style>

