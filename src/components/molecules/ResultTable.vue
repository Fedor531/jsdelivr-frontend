<template>
    <table class="table">
        <tHead :columns="columns"/>
        <tBody :columns="columns" :packages="packages"/>
    </table>
</template>

<script>
import tBody from './tBody';
import tHead from './tHead';

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
    background: #fff;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .08);
    border-radius: 5px !important;
    overflow: hidden;
}
</style>
