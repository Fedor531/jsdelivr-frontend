<template>
    <section class="history">
        <h2 class="history__title">История поисков</h2>
        <template v-if="searchItems.length">
            <div class="cards">
                <div class="card p-3"
                     v-for="item in searchItems"
                     :key="item.id"
                >
                    <div>
                        <strong>Текст запроса: </strong>
                        <span>{{ item.title }}</span>
                    </div>
                    <div>
                        <strong>Дата: </strong>
                        <span>{{ item.date }}</span>
                    </div>
                </div>
            </div>
            <Button class="button"
                    @click="clearSearchItems"
            >
                Очистить
            </Button>
        </template>
        <template v-else>
            <p>Нет сохраненных запросов</p>
        </template>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'History',
    computed: {
        ...mapGetters('history', ['searchItems'])
    },
    methods: {
        ...mapActions({
            'getSearchItems': 'history/getSearchItems',
            'clearSearchItems': 'history/clearSearchItems'
        })
    },

    async created() {
        await this.getSearchItems();
    }
}
</script>

<style scoped lang="scss">
.history {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .cards {
        margin: 10px 0;
    }

    .card {
        margin-bottom: 10px;
    }
}

.button {
    max-width: 100px;
}
</style>
