import firebase from 'firebase/compat/app';

export default {
    state: {
        info: {}
    },

    getters: {
        getInfo(state) {
            return state.info;
        },
    },

    mutations: {
        setInfo(state, value) {
            state.info = value;
        },
        clearInfo(state) {
            state.info = {};
        }
    },

    actions: {
        async fetchInfo({ dispatch, commit }) {
            try {
                const uid = await dispatch('auth/getUid', null, { root: true });

                const info = (await firebase.database().ref(`/users/${ uid }/info`).once('value')).val();

                commit('setInfo', info);
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        }
    },

    namespaced: true
}
