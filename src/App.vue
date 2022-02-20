<template>
  <v-app>
    <side-navigation />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from '@vue/composition-api';
import SideNavigation from '@/components/SideNavigation.vue';

export default defineComponent({
  components: {SideNavigation},
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'No Title',
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome Webapp'
  }
});

</script>

<style lang="scss">
body {
  font-family: system-ui, sans-serif;
}
</style>
