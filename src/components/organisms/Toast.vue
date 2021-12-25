<template>
    <transition name="fade">
        <div class="toast show"
             v-show="!!toastText"
             :key="toastText"
        >
            <div class="toast-header">
                <strong
                    class="toast__title me-auto"
                    :class="toastType"
                >
                    {{ type[toastType] }}
                </strong>
                <button type="button"
                        class="btn-close"
                        @click="closeToast"
                ></button>
            </div>
            <div class="toast-body">
                {{ toastText }}
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import messages from '../../utils/messages';

export default {
    name: 'Toast',

    data() {
        return {
            timeout: null,
            type: {
                success: 'Успех',
                warning: 'Предупреждение',
                error: 'Ошибка'
            }
        }
    },

    methods: {
        ...mapMutations('toast', ['clearToast']),

        closeToast() {
            this.clearToast();
        }
    },

    computed: {
        ...mapGetters({
            toast: 'toast/getToast',
            toastType: 'toast/getToastType'
        }),

        toastText() {
            return messages[this.toast];
        }
    },

    watch: {
        toast() {
            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                this.clearToast();
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
        &.success {
            color: green;
        }

        &.warning {
            color: #a49d0f;
        }

        &.error {
            color: #bd0101;
        }
    }
}
</style>
