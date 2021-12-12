<template>
    <Loader v-show="loading"/>
    <Pagintaion v-if="packages.length"
                :totalPages="totalPages"
                :activePage="activePage"
    />
    <ResultTable v-if="packages.length" :packages="packages"/>
</template>

<script>
import ResultTable from '../components/organisms/ResultTable';
import Loader from '../components/atoms/Loader';
import Pagintaion from '../components/molecules/Pagintaion';

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Index',
    components: { Pagintaion, Loader, ResultTable },

    methods: {
        ...mapActions({
            searchPackages: 'package/searchPackages'
        }),
    },

    created() {
        if (this.$route.query.q) {
            this.searchPackages();
        }
    },

    computed: {
        ...mapGetters({
            packages: 'package/getPackages',
            totalPages: 'package/getTotalPages',
            activePage: 'package/getActivePage',
            loading: 'loader/getLoading',
        })
    }
}
</script>

<style lang="scss">

</style>


