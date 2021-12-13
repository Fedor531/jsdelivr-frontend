<template>
    <tbody>
    <tr v-for="item in packages" :key="item.date">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.name }}</td>
        <td class="column author">
            <a :href="item.author?.url" target="_blank">
                {{ item.author?.name ? item.author?.name : 'Нет данных' }}
            </a>
        </td>
        <td class="column version">{{ item.version }}</td>
        <td>
            <Button @click="openModal(item)">
                Подробнее
            </Button>
        </td>
    </tr>
    </tbody>
</template>

<script>
import { mapMutations } from 'vuex';

// TODO
export default {
    name: 'tBody',
    props: {
        packages: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        }
    },

    methods: {
        ...mapMutations({
            showModal: 'modal/setShowModal'
        }),

        openModal(item) {
            this.showModal({ show: true, item })
        }
    }
}
</script>

<style scoped lang="scss">
.column {
    &.version, &.author {
        @media all and (max-width: 768px) {
            display: none;
        }
    }
}
</style>
