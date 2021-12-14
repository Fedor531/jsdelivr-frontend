<template>
    <transition name="fade">
        <div class="modal"
             v-show="getModalComponent"
             :key="getModalComponent"
             @click="closeModal"
        >
            <div @click.stop class="modal__content">
                <component v-bind:is="getModalComponent"></component>
                <img class="modal__close"
                     src="../../assets/images/close-button.svg"
                     alt="close-button"
                     @click="closeModal"
                />
            </div>
        </div>
    </transition>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import PackagePopup from '../molecules/PackagePopup';

export default {
    name: 'Modal',
    components: {
        PackagePopup
    },
    methods: {
        ...mapMutations('modal', ['closeModal'])
    },

    computed: {
        ...mapGetters('modal', ['getModalComponent'])
    },
}
</script>

<style scoped lang="scss">
.modal {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    position: fixed;

    &__content {
        position: relative;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        margin: auto;
        min-height: 50px;
        min-width: 300px;
        max-width: 800px;
    }

    &__close {
        width: 24px;
        height: 24px;
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
    }
}
</style>
