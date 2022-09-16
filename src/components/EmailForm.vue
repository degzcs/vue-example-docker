<template>
    <form class="email-form" @submit.prevent="onSubmit">
        <h3>Email form</h3>
        <input id="email" v-model="email">
        <input class="button" type="submit" value="Submit">
    </form>
</template>
<script>
export default {
    name: 'EmailForm',
    data() {
        return{
            email: ''
        }
    },
    methods: {
        onSubmit(){
            // TODO: validate email
            this.$emit('email-submitted', this.email)
            this.email = ''
        }
    }
}
</script>
<style>
</style>
