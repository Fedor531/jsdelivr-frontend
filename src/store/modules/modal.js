export const modal = {
    state: () => ({
        modalData: {},
        modalComponent: []
    }),

    getters: {
        getModalComponent(state) {
            return state.modalComponent[state.modalComponent.length - 1];
        },
        getModalData(state) {
            return state.modalData;
        },
    },

    mutations: {
        openModal(state, { componentName, modalData }) {
            state.modalComponent.push(componentName);
            state.modalData = modalData;
        },
        closeModal(state) {
            state.modalComponent.splice(state.modalComponent.length - 1, 1)
        }
    },

    namespaced: true
}
