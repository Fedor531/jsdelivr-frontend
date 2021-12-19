<template>
    <form class="form-login"
          @submit.prevent="submitForm"
    >
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Input class="form-control"
                   placeholder="example@gmail.com"
                   type="email"
                   id="email"
                   v-model.trim="email"
                   required
            />
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Пароль</label>
            <Input class="form-control"
                   placeholder="Поиск"
                   type="password"
                   id="password"
                   v-model.trim="password"
                   autocomplete="on"
                   required
            />
        </div>
        <div id="passwordHelpBlock" class="form-text">
            Нет аккаунта?
            <router-link to="/register">Зарегестрироваться</router-link>
        </div>
        <Button>
            Войти
        </Button>
    </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions('auth', ['login']),

        async submitForm() {
            const formData = {
                email: this.email,
                password: this.password
            }
            try {
                await this.login(formData);
                await this.$router.push('/');
            }
            catch (e) {
                // console.log(e)
            }
        }
    }
}
</script>
