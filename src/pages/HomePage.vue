<template>
  <div>
    <hello-world />
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  components: {HelloWorld},
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Default Title',
  }
});

</script>

<style lang="scss" scoped>
</style>
