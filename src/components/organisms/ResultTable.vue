<template>
    <table class="table">
        <tHead :columns="columns"/>
        <tBody :columns="columns" :packages="packages"/>
    </table>
</template>

<script>
import tBody from '../molecules/tBody';
import tHead from '../molecules/tHead';

export default {
    name: 'ResultTable',
    components: { tBody, tHead },
    data() {
        return {
            columns: [
                {
                    id: 1,
                    title: '#',
                    key: '#'
                },
                {
                    id: 2,
                    title: 'Название пакета',
                    key: 'name'
                },
                {
                    id: 3,
                    title: 'Автор',
                    key: 'author'
                },
                {
                    id: 4,
                    title: 'Версия',
                    key: 'version'
                },
                {
                    id: 5,
                    title: '',
                    key: 'buttons'
                }
            ]
        }
    },
    props: {
        packages: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.table {
    border: 1px solid #c3c3c3;
}
</style>
