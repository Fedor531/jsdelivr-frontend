<template>
    <transition name="fade">
        <div class="toast show"
             v-show="!!errorText"
             :key="errorText"
        >
            <div class="toast-header">
                <strong class="toast__title me-auto">
                    Ошибка
                </strong>
                <button type="button"
                        class="btn-close"
                        @click="closeToast"
                ></button>
            </div>
            <div class="toast-body">
                {{ errorText }}
            </div>
        </div>
    </transition>
</template>

<script>
import messages from '../../utils/messages';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'Toast',

    data() {
        return {
            timeout: null
        }
    },

    methods: {
        ...mapMutations('error', ['clearError']),

        closeToast() {
            this.clearError();
        }
    },

    computed: {
        ...mapGetters({
            error: 'error/getError'
        }),

        errorText() {
            return messages[this.error];
        }
    },

    watch: {
        error() {
            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                this.clearError();
            }, 10000)
        }
    }
}
</script>

<style scoped lang="scss">
.toast {
    position: fixed;
    width: 300px;
    right: 20px;
    top: 100px;

    &__title {
        color: #bd0101
    }
}
</style>
