<template>
    <nav>
        <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item"
                :class="{'dropdown': item.type === 'dropdown'}"
                v-for="item in navbar"
                :key="item.id"
            >
                <router-link
                    v-if="item.type === 'link'"
                    :to="item.path"
                    class="nav-link"
                >
                    {{ item.title }}
                </router-link>
                <template v-if="item.type === 'dropdown'">
                    <a class="nav-link dropdown-toggle"
                       href="#"
                       id="navbarDropdown"
                       role="button"
                       data-bs-toggle="dropdown"
                       aria-expanded="false"
                    >
                        {{ item.title }}
                    </a>
                    <ul class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                    >
                        <li v-for="dropdown in item.links"
                            :key="dropdown.id">
                            <router-link
                                class="dropdown-item"
                                :to="dropdown.path"
                            >
                                {{ dropdown.title }}
                            </router-link>
                        </li>
                    </ul>
                </template>
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
