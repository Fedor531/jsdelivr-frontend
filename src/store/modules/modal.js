export const modal = {
    state: () => ({
        showModal: false,
        item: {}
    }),

    getters: {
        getShowModal(state) {
            return state.showModal;
        },
        getPackageItem(state) {
            return state.item;
        },
    },

    mutations: {
        setShowModal(state, { show, item }) {
            if (item) {
                state.item = item;
            }
            state.showModal = show;
        },
    },

    namespaced: true
}
