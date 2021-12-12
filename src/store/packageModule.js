import axios from 'axios';
import router from '../router';

export const packageModule = {
    state: () => ({
        packages: [],
        activePage: 1,
        pageSize: 10,
        totalPages: null,
        totalSearchPackages: 50
    }),

    getters: {
        getPackages(state) {
            return state.packages.map(item => ({ ...item.package }));
        },

        getActivePage(state) {
            return state.activePage;
        },

        getTotalPages(state) {
            return state.totalPages;
        }
    },
    mutations: {
        setPackages(state, packages) {
            state.packages = packages;
        },

        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        }
    },
    actions: {
        async searchPackages({state, commit}) {
            const searchText = router.currentRoute.value.query.q;

            try {
                setTimeout(async () => {
                    const response = await axios.get('https://api.npms.io/v2/search', {
                        params: {
                            q: searchText,
                            size: state.totalSearchPackages
                        }
                    });
                    commit('setTotalPages', Math.ceil(state.totalSearchPackages / state.pageSize));
                    commit('setPackages', response.data.results)
                }, 2000)
            } catch (e) {
                console.log(e)
            }
        },
    },
    namespaced: true
}
