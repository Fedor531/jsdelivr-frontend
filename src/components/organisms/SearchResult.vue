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
import { mapGetters, mapState } from 'vuex';
import ResultTable from '../molecules/ResultTable';
import Loader from '../atoms/Loader';
import Pagination from '../molecules/Pagination';

export default {
    name: 'SearchResult',
    components: { Pagination, Loader, ResultTable },

    computed: {
        ...mapState({
            alertText: state => state.package.alertText,
        }),
        ...mapGetters('package', ['packages', 'totalPages', 'searchId'])
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
