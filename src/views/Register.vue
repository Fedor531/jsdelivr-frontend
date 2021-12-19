<template>
    <form class="form-login"
          @submit.prevent="submitForm"
    >
        <div class="mb-3">
            <label for="email"
                   class="form-label"
            >
                Email
            </label>
            <Input class="form-control"
                   placeholder="example@gmail.com"
                   type="email"
                   id="email"
                   required
                   v-model.trim="email"
            />
        </div>
        <div class="mb-3">
            <label for="name"
                   class="form-label"
            >
                Имя
            </label>
            <Input class="form-control"
                   placeholder="Иван"
                   type="text"
                   id="name"
                   required
                   v-model.trim="name"
            />
        </div>
        <div class="mb-3">
            <label for="password"
                   class="form-label"
            >
                Пароль
            </label>
            <Input class="form-control"
                   type="password"
                   id="password"
                   autocomplete="on"
                   required
                   v-model.trim="password"
            />
        </div>
        <div id="passwordHelpBlock" class="form-text">
            Уже есть аккаунт?
            <router-link to="/login">Войти</router-link>
        </div>
        <Button>
            Зарегистрироваться
        </Button>
    </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            name: ''
        }
    },

    methods: {
        ...mapActions('auth', ['register']),

        async submitForm() {
            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            };

            try {
                await this.register(formData);
                await this.$router.push('/login');
            }
            catch (e) {
                console.log(e);
            }
        }
    }
}
</script>

<style scoped>
</style>
