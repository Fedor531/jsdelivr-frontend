export default {
    state: {
        error: null
    },

    getters: {
        getError(state) {
            return state.error;
        }
    },

    mutations: {
        setError(state, error) {
            state.error = error;
        },
        clearError(state) {
            state.error = null;
        }
    },

    namespaced: true
}
