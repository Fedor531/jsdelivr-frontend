<template>
    <transition name="fade" mode="out-in">
        <div v-if="packages.length" :key="searchId">
            <Pagination :totalPages="totalPages"/>
            <transition name="fade" mode="out-in">
                <ResultTable :packages="packages" :key="$route.query.page"/>
            </transition>
        </div>
        <div v-else>
            {{ alertText }}
        </div>
    </transition>
</template>

<script>
import ResultTable from '../components/organisms/ResultTable';
import Loader from '../components/atoms/Loader';
import Pagination from '../components/molecules/Pagination';

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Index',
    components: { Pagination, Loader, ResultTable },

    data() {
        return {
            alertText: 'Начните искать'
        }
    },

    methods: {
        ...mapActions({
            searchPackages: 'package/searchPackages'
        }),
    },

    created() {
        if (this.$route.query.q) {
            this.searchPackages();

            if (!this.$route.query.page) {
                this.$router.push({ path: this.$route.path, query: { ...this.$route.query, page: 1 } });
            }
        }
    },

    computed: {
        ...mapGetters({
            packages: 'package/getPackages',
            totalPages: 'package/getTotalPages',
            searchId: 'package/getSearchId'
        })
    }
}
</script>

<style lang="scss">

</style>


