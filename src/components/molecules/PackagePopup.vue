<template>
    <div class="package-popup">
        <h3>{{ data.name }}</h3>
        <h4>Описание</h4>
        <div>{{ data.description }}</div>
        <div>{{ data.date }}</div>
        <div><a :href="data.author?.url">{{ data.author?.name }}</a></div>
        <div>{{ data.version }}</div>
    </div>
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

</style>
