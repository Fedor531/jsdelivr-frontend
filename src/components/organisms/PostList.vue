<template>
    <div v-show="posts.length > 0">
        <h3>
            Список постов
        </h3>
        <transition-group name="post-list">
            <PostItem v-for="post in posts"
                      :post="post"
                      :key="post.id"
                      @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>
    <div v-show="posts.length === 0">
        Список постов пуст
    </div>
</template>

<script>
import PostItem from '../molecules/PostItem';

export default {
    name: 'PostList',
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
    transition: all .4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.post-list-move {
    transition: transform 0.8s ease;
}
</style>
