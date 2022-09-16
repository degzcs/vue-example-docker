<template>
    <form class="email-form" @submit.prevent="onSubmit" novalidate="true">
        <h3>Email form</h3>
        <p id="error" v-if="error">error: {{error}} </p>
        <input id="email" v-model="email" type="email">
        <input class="button" type="submit" value="Submit">
    </form>
</template>
<script>
export default {
    name: 'EmailForm',
    data() {
        return{
            email: '',
            error: ''
        }
    },
    methods: {
        onSubmit() {
            this.error = ''
            if(this.checkForm()) {
                console.log('in')
                this.$emit('email-submitted', this.email)
                this.email = ''
            }
        },
        checkForm() {
            if(this.email == ''){
                this.error = 'Please enter an email!'
                return false
            } else if(!this.isTheRightFormat(this.email)){
                this.error = 'Plese enter a valid email'
                return false
            }
            return true
        },
        isTheRightFormat(email) {
            // eslint-disable-next-line
            let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return re.test(email)
        }
    }
}
</script>
<style>
#error {
    color: red;
}
</style>
