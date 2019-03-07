<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Splash msg="Velkommen til matteverden" />
  </div>
</template>

<script>
// @ is an alias to /src
import Splash from '@/components/Splash.vue';

export default {
  name: 'home',
  components: {
    Splash
  }
};
</script>

<style>
img {
  width: 200px;
}
</style>
