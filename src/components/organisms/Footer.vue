<template>
    <footer class="footer py-4 border-top">
        <div class="container d-flex flex-wrap justify-content-between align-items-center">
            <div class="col-md-4 d-flex align-items-center">
                <span class="text-muted">© 2021
                    <a href="https://pereverzev.pro/" target="_blank">
                        Fedor Perereverzev
                    </a>
                </span>
            </div>

            <div class="col-md-4 d-flex justify-content-end align-items-center">
                <a class="footer-logo" href="https://github.com/Fedor531" target="_blank">
                    <img src='../../assets/images/github-logo.svg' alt='Github'/>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
    background: #fff;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .08);
}

.footer-logo {
    width: 30px;
    height: 30px;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>
