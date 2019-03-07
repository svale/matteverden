<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />

    <h2>Skriv inn navnet ditt:</h2>
    <form @submit.prevent="submitName" class="inline">
      <input v-model="name" class="p-3 text-center" />
    </form>
  </div>
</template>

<script></script>

<style></style>
