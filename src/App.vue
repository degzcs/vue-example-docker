<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <EmailForm @email-submitted="UpdateEmails"/>
  <EmailList :emails="emails"/>
</template>

<script>
import EmailList from './components/EmailList.vue'
import EmailForm from './components/EmailForm.vue'

export default {
    name: 'App',
    components: {
        EmailForm,
        EmailList
    },
    data() {
        return {
            emails: []
        }
    },
    methods: {
        UpdateEmails(email) {
            this.emails.push(email)
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
