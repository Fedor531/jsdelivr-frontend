<template>
    <select v-model="modelValue" @change="changeOptions">
        <option disabled value="">
            Выберите что-нибудь из списка
        </option>
        <option v-for="options in options"
                :key="options.value"
                :value="options.value"
        >{{ options.name }}</option>
    </select>
</template>

<script>
export default {
    name: 'Select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },

    methods: {
        changeOptions(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>
