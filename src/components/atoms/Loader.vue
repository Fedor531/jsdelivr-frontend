<template>
    <div class="loader"></div>
</template>

<script>
export default {
    name: 'Loader'
}
</script>

<style scoped lang="scss">
.loader {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: conic-gradient(#0000 10%, cornflowerblue);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
    animation: s3 1s infinite linear;
}

@keyframes s3 {
    to {
        transform: rotate(1turn)
    }
}
</style>
