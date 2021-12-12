<template>
    <nav aria-label="...">
        <ul class="pagination pagination-sm">
            <li class="page-item"
                :class="{'active': +$route.query.page === pageNumber}"
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                @click="setPage(pageNumber)"
            >
                <a class="page-link"
                   href="#"
                >
                    {{ pageNumber }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Pagintaion',
    props: {
        totalPages: {
            type: Number,
            required: true
        },
    },
    methods: {
        setPage(pageNumber) {
            const query = { ...this.$route.query, page: pageNumber };
            this.$router.push({ path: this.$route.path, query})
        }
    }
}
</script>

<style scoped>

</style>
