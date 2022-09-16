<template>
    <h3 v-if="emails.length">List of emails</h3>
    <p> {{EmailsToString()}} </p>
</template>

<script>
export default {
    name: 'EmailList',
    props: {
        emails: {
            type: Array,
            required: true
        }
    },
    methods: {
        EmailsToString() {
            return this.emails.join(', ')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
