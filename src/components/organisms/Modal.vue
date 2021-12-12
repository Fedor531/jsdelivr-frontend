<template>
    <div class="modal" v-show="showModal" @click="closeModal">
        <div @click.stop class="modal__content">
            <slot/>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'Modal',
    props: {
        showModal: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        ...mapMutations({
            setShowModal: 'modal/setShowModal'
        }),

        closeModal() {
            this.setShowModal({ show: false });
        }
    }
}
</script>

<style scoped lang="scss">
.modal {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    position: fixed;

    &__content {
        padding: 20px;
        background-color: #fff;
        border-radius: 12px;
        margin: auto;
        min-height: 50px;
        min-width: 300px;
        max-width: 550px;
    }
}
</style>
