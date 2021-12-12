<template>
    <form>
        <h3>Создание поста</h3>
        <Input v-model.trim="post.title" placeholder="Название поста"/>
        <Input v-model.trim="post.body" placeholder="Описание поста"/>
        <Button @click.prevent="createPost">
            Добавить пост
        </Button>
    </form>
</template>

<script>
export default {
    name: 'PostForm',
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },

    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                ...this.post
            }

            this.$emit('create', newPost);

            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style scoped>

</style>
