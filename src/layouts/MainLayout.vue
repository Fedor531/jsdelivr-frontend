<template>
    <main class="container">
        <router-view></router-view>
    </main>
    <Footer/>
    <Modal/>
</template>

<script>
import Footer from '../components/organisms/Footer';
import Modal from '../components/organisms/Modal';

export default {
    name: 'MainLayout',
    components: { Footer, Modal }
}
</script>
