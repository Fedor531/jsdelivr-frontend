<template>
    <form class="search-form">
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
            addSearchItem: 'history/addSearchItem'
        }),

        async searchPackage() {
            const searchText = this.search;

            if (searchText) {
                await this.$router.push({ path: this.$route.path, query: { q: searchText, page: 1 } });

                // Ищем пакеты
                await this.searchPackages({ searchText });
                // Добавляем в историю
                await this.addSearchItem({ searchText });
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

<style scoped lang="scss">
.search-form {
    max-width: 600px;
    margin: 0 auto;
}
</style>
