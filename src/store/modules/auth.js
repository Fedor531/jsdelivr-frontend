import firebase from 'firebase/compat/app';

export const auth = {
    state: () => ({
        isAuth: false
    }),

    getters: {
        getAuth(state) {
            return state.isAuth;
        }
    },

    mutations: {
        setAuth(state, bool) {
            state.isAuth = bool;
        }
    },

    actions: {
        async login({ dispatch, commit }, { email, password }) {
            commit('loader/setLoading', true, { root: true });

            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);

                commit('setAuth', true);
                dispatch('info/fetchInfo', null, { root: true });
            }
            catch (e) {
                commit('error/setError', e.code, { root: true });
                throw e;
            }
            finally {
                commit('loader/setLoading', false, { root: true });
            }
        },

        async logout({ commit }) {
            commit('loader/setLoading', true, { root: true });

            try {
                await firebase.auth().signOut();

                commit('setAuth', false);
                commit('info/clearInfo', true, { root: true });
            }
            catch (e) {
                commit('error/setError', e.code, { root: true });
                throw e;
            }
            finally {
                commit('loader/setLoading', false, { root: true });
            }
        },

        async register({ dispatch, commit }, { email, password, name }) {
            commit('loader/setLoading', true, { root: true });

            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);

                const uid = await dispatch('getUid');

                await firebase.database().ref(`/users/${ uid }/info`).set({
                    name
                })
            }
            catch (e) {
                commit('error/setError', e.code, { root: true });
                throw e;
            }
            finally {
                commit('loader/setLoading', false, { root: true });
            }
        },

        async getUid() {
            const user = await firebase.auth().currentUser;

            return user ? user.uid : null;
        }
    },

    namespaced: true
}
