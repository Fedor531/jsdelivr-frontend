<template>
    <form>
        <fieldset class="d-flex" :disabled="loading">
            <Input v-model.trim="search"
                   placeholder="Поиск"
                   type="search"
                   aria-label="Search"
            />
            <Button @click.prevent="searchPackage">
                Искать
            </Button>
        </fieldset>
    </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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

        async searchPackage() {
            if (this.search) {
                await this.$router.push({ path: this.$route.path, query: { q: this.search, page: 1 } });
                await this.searchPackages(this.search);
            }
        }
    },
    computed: {
        ...mapGetters({
            loading: 'loader/getLoading',
        })
    }
}
</script>

<style scoped>

</style>
