<script lang="ts">
import {defineComponent} from '@vue/composition-api';
import SideNavigation from '@/components/SideNavigation.vue';

export default defineComponent({
  components: {SideNavigation}
});

</script>

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

<style lang="scss">
body {
  font-family: system-ui, sans-serif;
}
</style>
