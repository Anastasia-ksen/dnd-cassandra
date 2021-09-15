<template lang="pug">
Tabs
    Tab(
        v-for='tab in tabs'
        :key='tab.id'
        :title='tab.title'
    )
        component(:is='tab.component')
</template>

<script>
import { Tabs, Tab } from '@/components/core/tabs/index.js'

export default {
  name: 'Menu',
  components: {
    Tabs,
    Tab,
    Icon: () => import('@/views/Icon'),
    User: () => import('@/views/User')
  },
  data () {
    return {
      tabs: [
        {
          id: 'key-a',
          title: 'Icon',
          component: 'Icon'
        },
        {
          id: 'key-b',
          title: 'User',
          component: 'User'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/components/tabs/tabs.scss';
</style>
