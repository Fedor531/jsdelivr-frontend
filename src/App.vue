<template>
    <Header/>
    <main class="container">
        <router-view></router-view>
    </main>
    <Footer />
    <Modal v-model:showModal="showModal">
        <PackagePopup :packageItem="packageItem" />
    </Modal>
</template>

<script>
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Modal from './components/organisms/Modal';

import { mapGetters } from 'vuex';
import PackagePopup from "./components/molecules/PackagePopup";

export default {
    components: { PackagePopup, Modal, Footer, Header },
    computed: {
        ...mapGetters({
            showModal: 'modal/getShowModal',
            packageItem: 'modal/getPackageItem'
        })
    }
}
</script>

<style lang="scss">
</style>

