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
});

</script>

<style lang="scss" scoped>
</style>
