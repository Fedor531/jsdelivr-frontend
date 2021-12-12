<template>
    <input class="form-control me-2"
           :value="modelValue"
           @input="updateInput"
    />
</template>

<script>
export default {
    name: 'Input',
    props: {
        modelValue: [String, Number]
    },

    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>
