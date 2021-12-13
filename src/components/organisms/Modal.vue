<template>
    <transition name="fade">
        <div class="modal"
             v-show="getModalComponent"
             :key="getModalComponent"
             @click="closeModal"
        >
            <div @click.stop class="modal__content">
                <component v-bind:is="getModalComponent"></component>
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
