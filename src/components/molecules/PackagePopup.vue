<template>
    <table class="table">
        <thead>
        <tr>
            <th class="column id">id</th>
            <th class="column name">Название пакета</th>
            <th class="column description">Описание</th>
            <th class="column author">Автор</th>
            <th class="column npm">Npm</th>
            <th class="column version">Версия</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="column id">{{ data.id }}</td>
            <td class="column name">{{ data.name }}</td>
            <td class="column description">{{ data.description }}</td>
            <td class="column author">
                <a :href="data.author?.url" target="_blank">
                    {{ data.author?.name ? data.author?.name : 'Нет данных' }}
                </a>
            </td>
            <td class="column npm">
                <a :href="data.links.npm" target="_blank">
                    Ссылка
                </a>
            </td>
            <td class="column version">{{ data.version }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PackagePopup',
    computed: {
        ...mapGetters({
            data: 'modal/getModalData'
        })
    }
}
</script>

<style scoped lang="scss">
@media all and (max-width: 768px) {
    .table {
        .column {
            &.version, &.author, &.id {
                display: none;
            }
        }
    }
}
</style>
