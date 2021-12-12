<template>
    <a class="navbar-brand logo" @click="$router.push('/')" href="">
        jsdelivr
    </a>
</template>

<script>
export default {
    name: 'Logo'
}
</script>

<style scoped>
.logo {
    color: cornflowerblue !important;
}
</style>
