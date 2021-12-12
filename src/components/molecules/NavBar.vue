<template>
    <nav class="me-auto">
        <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item"
                v-for="item in navbar"
                :key="item.id"
            >
                <a @click="$router.push(item.path)"
                   class="nav-link"
                   href=""
                   :class="{
                            'active': $route.path === item.path
                           }"
                >
                    {{ item.title }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        navbar: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
