<template>
    <transition name="fade" mode="out-in">
        <div v-if="packages.length" :key="searchId">
            <Pagination :totalPages="totalPages"/>
            <transition name="fade" mode="out-in">
                <ResultTable :packages="packages" :key="$route.query.page"/>
            </transition>
        </div>
        <div class="alert alert-primary" role="alert" v-else>
            {{ alertText }}
        </div>
    </transition>
</template>

<script>
import ResultTable from '../molecules/ResultTable';
import Loader from '../atoms/Loader';
import Pagination from '../molecules/Pagination';
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'SearchResult',
    components: { Pagination, Loader, ResultTable },

    computed: {
        ...mapState({
            alertText: state => state.package.alertText,
        }),
        ...mapGetters({
            packages: 'package/getPackages',
            totalPages: 'package/getTotalPages',
            searchId: 'package/getSearchId'
        })
    }
}
</script>

<style scoped lang="scss">
.alert {
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
}
</style>
