<template>
    <thead>
    <tr>
        <th scope="col"
            class="column"
            :class="col.key"
            v-for="col in columns"
            :key="col.key"
        >
            {{ col.title }}
        </th>
    </tr>
    </thead>
</template>

<script>
export default {
    name: 'tHead',
    props: {
        columns: {
            type: Array,
            required: true
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
