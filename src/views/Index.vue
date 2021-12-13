<template>
    <SearchResult/>
</template>

<script>
import SearchResult from '../components/organisms/SearchResult';
import { mapActions } from 'vuex';

export default {
    name: 'Index',
    components: { SearchResult },

    methods: {
        ...mapActions({
            searchPackages: 'package/searchPackages'
        })
    },

     async created() {
        if (this.$route.query.q) {
            await this.searchPackages();

            if (!this.$route.query.page) {
                await this.$router.push({ path: this.$route.path, query: { ...this.$route.query, page: 1 } });
            }
        }
    },
}
</script>

<style lang="scss">

</style>


