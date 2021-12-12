<template>
    <form class="d-flex">
        <Input v-model.trim="search"
               placeholder="Поиск"
               type="search"
               aria-label="Search"
        />
        <Button @click.prevent="searchPackage">
            Искать
        </Button>
    </form>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
    name: 'SearchForm',
    data() {
        return {
            search: ''
        }
    },
    methods: {
        ...mapActions({
            searchPackages: 'package/searchPackages',
        }),
        ...mapMutations({
            setLoading: 'loader/setLoading'
        }),

        async searchPackage() {
            await this.$router.push({ path: this.$route.path, query: { q: this.search, page: 1 }})
            // this.setLoading(true);
            await this.searchPackages(this.search);
            // this.setLoading(false);
        }
    },
}
</script>

<style scoped>

</style>
