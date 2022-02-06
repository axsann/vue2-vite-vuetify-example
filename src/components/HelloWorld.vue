<template>
  <div>
    <h1>{{ msg }}</h1>

    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >

    <p>
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
      >
        Vite Docs
      </a>
    </p>

    <v-btn @click="count++">
      count is: {{ count }}
    </v-btn>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
    <v-btn to="/about">
      About
    </v-btn>
  </div>
</template>

<script lang="ts">

import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  props: {
    msg: {type: String, default: 'Hello world'},
  },
  data() {
    return {
      count: 0,
    };
  }
});

</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
