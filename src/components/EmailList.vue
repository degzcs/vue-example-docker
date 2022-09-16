<template>
    <ul>
        <li v-for="(email, index) in emails" :key="index">
            {{email}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'EmailList',
    props: {
        emails: {
            type: Array,
            required: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
</style>
