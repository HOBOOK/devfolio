<template>
  <v-app id="app">
    <section>
      <transition name="fade">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </section>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
</style>


