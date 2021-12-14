<template>
    <table class="table">
<!--        <tHead :columns="columns"/>-->
        <tbody>
        <tr>
            <td>{{ data.id }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.description }}</td>
            <td>{{ data.author?.name }}</td>
            <td>{{ data.date }}</td>
            <td>{{ data.version }}</td>
            <td>{{ data.links }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PackagePopup',
    data() {
        return {
            columns: [
                {
                    id: 1,
                    title: 'id',
                    key: 'id'
                },
                {
                    id: 2,
                    title: 'Название пакета',
                    key: 'name'
                },
                {
                    id: 3,
                    title: 'Описание',
                    key: 'description'
                },
                {
                    id: 4,
                    title: 'Автор',
                    key: 'author'
                },
                {
                    id: 5,
                    title: 'Дата',
                    key: 'date'
                },
                {
                    id: 6,
                    title: 'Версия',
                    key: 'version'
                },
                {
                    id: 7,
                    title: 'Ссылки',
                    key: 'links'
                },
            ]
        }
    },
    computed: {
        ...mapGetters({
            data: 'modal/getModalData'
        })
    }
}
</script>

<style scoped lang="scss">

</style>
