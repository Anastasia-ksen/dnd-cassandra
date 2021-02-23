<template lang="pug">
div.component-tabs
    div.component-tabs-list
        div.component-tabs-tab(
            v-for='(tab, i) in tabs'
            :key='tab.id || `tab_${i}`',
            :id='tab.id',
            :class='_getTabClass(tab)',
            v-show='tab.isVisible',
            @click='onSelectTab(i)'
        ) {{tab.title}}
    div.component-tabs-panels
        slot
</template>

<script>
export default {
    name: 'Tabs',
    props: {
        defaultIndex: {
            type: Number,
            required: false,
            default: 0
        }
    },
    data() {
        return {
            selectedIndex: this.defaultIndex,
            tabs: []
        }
    },
    created() {
        this.tabs = this.$children
    },
    mounted() {
        if (this.tabs.length > 0) {
            this.onSelectTab(this.selectedIndex)
        }
    },
    methods: {
        /**
         * get tab object from data by identifier
         * @param {string} id
         * @pararm {Object|null}
         */
        getTabById(id) {
            const filteredTabs = this.tabs.filter(tab => tab.id === id)
            return filteredTabs.length > 0 ? filteredTabs[0] : null
        },

        /**
         * select a tab by the index, if available, and deselect other
         * @param {Number} index
         */
        onSelectTab(index) {
            const tab = this.tabs[index]
            if (tab && !tab.isDisabled) {
                // mark previous tab as deselected
                this.tabs[this.selectedIndex].isActive = false

                // mark current tab as selected
                this.selectedIndex = index
                tab.isActive = true

                // emit event about selecting tab
                this.$emit('select', {tab})
            }
        },

        /**
         * set showing for a tab by the idetifier
         * @param {String} id
         * @param {Boolean} isVisible
         */
        setTabVisible(id, isVisible) {
            const tab = this.getTabById(id)
            if (tab) {
                tab.isVisible = isVisible

                // if try to hide active tab, need to set active another one
                if (tab.isActive && !isVisible) {
                    tab.isActive = false

                    const visibleTabs = this.tabs.filter(tab => tab.isVisible)
                    if (visibleTabs.length > 0) {
                        visibleTabs[0].isActive = true
                    }
                }
            }
        },

        _getTabClass({isActive, isDisabled}) {
            return [
                isActive ? 'is-active' : null, 
                isDisabled ? 'is-disabled': null
            ]
        }
    }
}
</script>