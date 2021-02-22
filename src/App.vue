<template lang="pug">
#app
    Menu
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Menu from '@/views/Menu'

export default {
    name: 'App',
    components: {
        Menu
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
