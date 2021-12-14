<template>
    <table class="table">
        <thead>
        <tr>
            <th class="column id">#</th>
            <th class="column name">Название пакета</th>
            <th class="column version">Версия</th>
            <th class="column buttons"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in packages" :key="item.date">
            <td class="column id">{{ item.id }}</td>
            <td class="column name">{{ item.name }}</td>
            <td class="column version">{{ item.version }}</td>
            <td class="column buttons">
                <Button @click="open(item)">
                    Подробнее
                </Button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'ResultTable',
    props: {
        packages: {
            type: Array,
            required: true
        }
    },
    methods: {
        ...mapMutations({
            openModal: 'modal/openModal'
        }),

        open(item) {
            const modalOptions = {
                componentName: 'PackagePopup',
                modalData: item
            };
            this.openModal(modalOptions)
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

    thead {
        tr {
            th {
                &:not(:first-child) {
                    width: calc(100% / 3);
                }
            }
        }
    }
}

@media all and (max-width: 768px) {
    .table {
        .column {
            &.version {
                display: none;
            }
        }
    }
}
</style>
