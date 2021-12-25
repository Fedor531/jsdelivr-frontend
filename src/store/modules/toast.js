export default {
    state: {
        toast: null,
        toastType: null
    },

    getters: {
        getToast(state) {
            return state.toast;
        },
        getToastType(state) {
            return state.toastType;
        }
    },

    mutations: {
        setToast(state, { toast, toastType }) {
            state.toast = toast;
            state.toastType = toastType;
        },
        clearToast(state) {
            state.toast = null;
            state.toastType = null;
        }
    },

    namespaced: true
}
