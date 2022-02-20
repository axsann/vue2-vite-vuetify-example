<template>
  <div>
    <div>About</div>
    <v-btn to="/home">
      Home
    </v-btn>
  </div>
</template>

<script lang="ts">

import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'About',
  }
});

</script>

<style lang="scss" scoped>
</style>
