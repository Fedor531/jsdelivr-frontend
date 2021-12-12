<template>
    <div>
        <h1>Страница с постами</h1>
        <Input :model-value="searchQuery" @update:model-value="setSearchQuery"/>
        <div class="app__btns">
            <Button @click="modal = true">Создать пост</Button>
            <Select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            />
        </div>
        <Modal v-model:show="modal">
            <PostForm @create="createPost"/>
        </Modal>
        <PostList v-if="!isPostLoading" :posts="sortedAndSearchPosts" @remove="removePost"/>
        <div v-else>Идет загрзука...</div>

        <div class="page__wrapper">
            <div class="page"
                 v-for="pageNumber in totalPages"
                 :key="pageNumber"
                 :class="{
                     'current-page': page === pageNumber
                 }"
                 @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div>
    </div>
</template>

<script>
import PostForm from '../components/organisms/PostForm';
import PostList from '../components/organisms/PostList';
import Modal from '../components/organisms/Modal';
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

export default {
    name: 'IndexVuex',
    components: { Modal, PostList, PostForm },
    data() {
        return {
            modal: false,
        }
    },

    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            fetchPosts: 'post/fetchPosts'
        }),

        createPost(post) {
            this.posts.push(post);
            this.modal = false;
        },

        removePost(post) {
            this.posts = this.posts.filter(item => item.id !== post.id)
        },

        changePage(pageNumber) {
            this.setPage(pageNumber);
        }
    },

    mounted() {
        this.fetchPosts()
    },

    // Не мутируем массив
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions
        }),
        ...mapGetters({
            sortedAndSearchPosts: 'post/sortedAndSearchedPosts'
        })
    },

    // Функция наблюдатель должна называться также как наблюдаемая модель
    watch: {
        // На каждое изменение страницы реагруем и запрашиваем новый список пользователей
        page() {
            console.log(this.sortOptions)
            this.fetchPosts();
        }
    }
}
</script>

<style lang="scss">
.app__btns {
    display: flex;
    justify-content: space-between;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid #000;
    padding: 15px;
    cursor: pointer;
}

.current-page {
    border: 1px solid red;
}
</style>


