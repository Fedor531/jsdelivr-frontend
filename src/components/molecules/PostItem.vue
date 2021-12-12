<template>
    <div class="post">
        {{ post.id }}
        <strong>Нахвание</strong> {{ post.title }}
        <strong>Описание</strong> {{ post.body }}
        <Button @click="$emit('remove', post)">Удалить</Button>
        <Button @click="$router.push(`/${ post.id }`)">Открыть</Button>
    </div>
</template>

<script>

export default {
    name: 'PostItem',
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.post {
    margin-top: 12px;
    padding: 12px;
    border: 1px solid green;
}
</style>
