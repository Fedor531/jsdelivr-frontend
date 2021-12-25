import firebase from 'firebase/compat/app';

export default {
    state: {
        searchItems: [],
    },

    getters: {
        searchItems(state) {
            return state.searchItems;
        }
    },

    mutations: {
        setSearchItems(state, value) {
            state.searchItems = Object.keys(value).map(key => ({
                ...value[key],
                id: key
            }));
        }
    },

    actions: {
        async addSearchItem({ commit, dispatch }, { searchText }) {
            try {
                const uid = await dispatch('auth/getUid', null, { root: true });

                if (!uid) {
                    return;
                }

                const searchItem = {
                    title: searchText,
                    date: Date.now()
                };

                await firebase.database().ref(`/users/${ uid }/history`).push(searchItem);
            }
            catch (e) {
                commit('toast/setToast', { toast: e.code, toastType: 'error' }, { root: true });
                throw e;
            }
        },

        async getSearchItems({ commit, dispatch }) {
            commit('loader/setLoading', true, { root: true });
            try {
                const uid = await dispatch('auth/getUid', null, { root: true });

                const items = (await firebase.database().ref(`/users/${ uid }/history`).once('value')).val() ?? {};

                commit('setSearchItems', items);
            }
            catch (e) {
                commit('toast/setToast', { toast: e.code, toastType: 'error' }, { root: true });
                throw e;
            }
            finally {
                commit('loader/setLoading', false, { root: true });
            }
        },

        async clearSearchItems({ commit, dispatch }) {
            commit('loader/setLoading', true, { root: true });

            try {
                const uid = await dispatch('auth/getUid', null, { root: true });

                await firebase.database().ref(`/users/${ uid }/history`).remove();

                commit('setSearchItems', {});
            }
            catch (e) {
                commit('toast/setToast', { toast: e.code, toastType: 'error' }, { root: true });
                throw e;
            }
            finally {
                commit('loader/setLoading', false, { root: true });
            }
        }
    },

    namespaced: true
}
