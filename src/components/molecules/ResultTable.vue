<template>
    <table class="table result-table">
        <thead>
        <tr>
            <th v-for="col in columns"
                :key="col.key"
            >
                {{ col.title }}
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in packages" :key="item.date">
            <th>{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.version }}</td>
            <td>
                <a class="links__item" :href="item.links.npm" target="_blank">
                    <img src="../../assets/images/npm-logo.svg" alt="npm-logo"/>
                </a>
            </td>
            <td>
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
                    title: 'Версия',
                    key: 'version'
                },
                {
                    id: 4,
                    title: 'Npm',
                    key: 'Npm'
                },
                {
                    id: 5,
                    title: '',
                    key: 'buttons'
                }
            ]
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
.result-table {
    background: #fff;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .08);
    border-radius: 5px !important;
    overflow: hidden;

    thead {
        tr {
            th {
                &:not(:first-child) {
                    width: calc(100% / 4);
                }
            }
        }
    }
}

.links {
    display: flex;

    &__item {
        width: 30px;
        height: 30px;
        display: block;

        img {
            width: 100%;
        }
    }
}
</style>

<!--<td>-->
<!--<a class="links__item" :href="item.links.repository" target="_blank">-->
<!--    <img src="../../assets/images/github-logo.svg" alt="npm-github"/>-->
<!--</a>-->
<!--</td>-->

<!--            <td class="column author">-->
<!--                <a :href="item.author?.url" target="_blank">-->
<!--                    {{ item.author?.name ? item.author?.name : 'Нет данных' }}-->
<!--                </a>-->
<!--            </td>-->
