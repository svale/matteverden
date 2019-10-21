<template>
  <div>
    <h1>hei</h1>
    <div class="fixed pin-t pin-r m-10 border-black">
      <img
        src="../assets/gfx/matteverden level.png"
        alt="level indikator"
        class=""
      />
      <span
        class="absolute z-10 pin-r mr-3 mt-2 text-2xl font-bold text-white"
        >{{ level }}</span
      >
    </div>
    <div>
      <h1>Vi starter med noen oppgaver.</h1>
      <p>Velg mellom PLUSS eller MINUS</p>
      <p>startpil her</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'start',
  data: () => {
    return {
      level: 0
    };
  }
};
</script>

<style>
body {
  background-color: #ffffff;
}
</style>
