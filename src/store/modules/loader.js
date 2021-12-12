export const loader = {
    state: () => ({
        loading: false
    }),

    getters: {
        getLoading(state) {
            return state.loading;
        },
    },

    mutations: {
        setLoading(state, bool) {
            state.loading = bool;
        },
    },

    namespaced: true
}
