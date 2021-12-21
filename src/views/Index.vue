<template>
    <SearchForm/>
    <SearchResult/>
</template>

<script>
import SearchResult from '../components/organisms/SearchResult';
import SearchForm from '../components/molecules/SearchForm';
import { mapActions } from 'vuex';

export default {
    name: 'Index',
    components: { SearchForm, SearchResult },
    methods: {
        ...mapActions('package', ['searchPackages']),

        async init() {
            const searchText = this.$route.query.q;

            if (searchText) {
                await this.searchPackages(searchText);

                if (!this.$route.query.page) {
                    await this.$router.push({ path: this.$route.path, query: { ...this.$route.query, page: 1 } });
                }
            }
        }
    },

     async created() {
        await this.init();
    },
}
</script>

