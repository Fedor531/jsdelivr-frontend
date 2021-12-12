import axios from 'axios';
import router from '../../router';

export const xpackage = {
    state: () => ({
        searchId: Date.now(),
        packages: [],
        pageSize: 10, // Количество элементов выводимых за раз
        totalPages: null, // Количество страниц
        requestSize: 50 // Максимальное количество объектов
    }),

    getters: {
        getPackages(state) {
            const activePage = +router.currentRoute.value.query.page;
            let firstValue = 0;
            let secondValue = 10;

            // TODO
            if (activePage === 1) {
                firstValue = 0;
                secondValue = 10;
            }
            else if (activePage === 2) {
                firstValue = 10;
                secondValue = 20;
            }
            else if (activePage === 3) {
                firstValue = 20;
                secondValue = 30;
            }
            else if (activePage === 4) {
                firstValue = 30;
                secondValue = 40;
            }
            else if (activePage === 5) {
                firstValue = 40;
                secondValue = 50;
            }

            return state.packages.slice(firstValue, secondValue);
        },

        getTotalPages(state) {
            return state.totalPages;
        },

        getSearchId(state) {
            return state.searchId;
        }
    },

    mutations: {
        setPackages(state, packages) {
            state.packages = packages;
        },

        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },

        setSearchId(state, id) {
            state.searchId = id;
        }
    },

    actions: {
        async searchPackages({ state, commit }) {
            commit('setSearchId', Date.now());
            const searchText = router.currentRoute.value.query.q;

            try {
                const response = await axios.get('https://api.npms.io/v2/search', {
                    params: {
                        q: searchText,
                        size: state.requestSize
                    }
                });

                const totalPages = Math.ceil(Math.min(state.requestSize, response.data.total) / state.pageSize);

                const packages = response.data.results.map((item, index) => ({
                    ...item.package,
                    id: index + 1
                }))

                commit('setTotalPages', totalPages);
                commit('setPackages', packages);
            }
            catch (e) {
                console.log(e)
            }
        },
    },
    namespaced: true
}
