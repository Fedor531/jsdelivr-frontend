<template>
    <div>
        <h1>Страница с постами</h1>
        <Input v-model="searchQuery"/>
        <div class="app__btns">
            <Button @click="modal = true">Создать пост</Button>
            <Select v-model="selectedSort" :options="sortOptions"/>
        </div>
        <Modal v-model:show="modal">
            <PostForm @create="createPost"/>
        </Modal>
        <PostList v-if="!isPostLoading" :posts="sortedAndSearchPosts" @remove="removePost"/>
        <div v-else>Идет загрзука...</div>

        <div class="page__wrapper">
            <div class="page"
                 v-for="pageNumber in totalPage"
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
import axios from 'axios';

export default {
    name: 'Index',
    components: { Modal, PostList, PostForm },
    data() {
        return {
            modal: false,
            isPostLoading: true,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPage: 0,
            sortOptions: [
                {
                    value: 'title',
                    name: 'По названию'
                },
                {
                    value: 'body',
                    name: 'По описанию'
                },
            ],

            posts: []
        }
    },

    methods: {
        createPost(post) {
            this.posts.push(post);
            this.modal = false;
        },

        removePost(post) {
            this.posts = this.posts.filter(item => item.id !== post.id)
        },

        async fetchPosts() {
            this.isPostLoading = true;

            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPage = Math.ceil(res.headers['x-total-count'] / this.limit) ;
                this.posts = res.data;
                this.isPostLoading = false;
            }
            catch (e) {
                console.log(e);
            }
        },

        changePage(pageNumber) {
            this.page = pageNumber
            // this.fetchPosts();
        }
    },

    mounted() {
        this.fetchPosts()
    },

    // Не мутируем массив
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },

        sortedAndSearchPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },

    // Функция наблюдатель должна называться также как наблюдаемая модель
    watch: {
        // Мутируем исходный массив ну такое
        // selectedSort(newValue) {
        //     this.posts.sort((post1, post2) => {
        //         return post1[newValue]?.localeCompare(post2[newValue]);
        //     })
        // }
        page() {
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


