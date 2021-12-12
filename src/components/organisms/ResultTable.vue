<template>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Описание</th>
            <th scope="col">Дата</th>
            <th scope="col">Автор</th>
            <th scope="col">Версия</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in packages" :key="item.date">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.date }}</td>
            <td><a :href="item.author?.url">{{ item.author?.name }}</a></td>
            <td>{{ item.version }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'ResultTable',
    props: {
        packages: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped lang="scss">
.table {
    border: 1px solid #c3c3c3;
}
</style>
