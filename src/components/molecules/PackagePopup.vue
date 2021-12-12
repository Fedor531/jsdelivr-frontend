<template>
    <div class="package-popup">
        <h3>{{ packageItem.name }}</h3>
        <h4>Описание</h4>
        <div>{{ packageItem.description }}</div>
        <div>{{ packageItem.date }}</div>
        <div><a :href="packageItem.author?.url">{{ packageItem.author?.name }}</a></div>
        <div>{{ packageItem.version }}</div>
    </div>
</template>

<script>
export default {
    name: 'PackagePopup',
    props: {
        packageItem: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.package-popup {
}
</style>
