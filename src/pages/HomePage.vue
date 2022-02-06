<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  components: {HelloWorld},
});

</script>

<template>
  <div>
    <hello-world />
  </div>
</template>

<style lang="scss" scoped>
</style>