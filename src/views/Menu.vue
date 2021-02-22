<template lang='pug'>
Tabs
    Tab(
        v-for='tab in tabs'
        :key='tab.id'
        :title='tab.title'
    ) {{tab.content}}
</template>

<script>
import {Tabs, Tab} from '@/components/core/tabs/index.js'

export default {
    name: 'Menu',
    components: {
        Tabs,
        Tab
    },
    data() {
        return {
            tabs: [
                {
                    id: 'key-a',
                    title: 'TTT',
                    content: 'lalala'
                },
                {
                    id: 'key-b',
                    title: 'BBB',
                    content: 'next-content'
                }
            ]
        }
    },
}
</script>