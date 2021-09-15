<template lang="pug">
#app
    Background
    MainHeader
    
    nav
        router-link(to='table') {{'TEXT'}}
                
    //- router-view

    main.hl-main

    //- nav
    //-     ul
    //-         li {{ "NAV 1" }}
    //-         li {{ "NAV 2" }}
    //-         li {{ "NAV 3" }}

//- 
//- <div class="sidebar">
//-         <aside>
//-             <h1>Widget title</h1>
//-             ...
//-         </aside>
//- </div>
//- footer
</template>

<script>
import MainHeader from '@/components/MainHeader'
import Background from '@/components/Background'

export default {
  name: 'App',
  components: {
    MainHeader,
    Background
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/base';

// .hl-main {
// }
</style>
