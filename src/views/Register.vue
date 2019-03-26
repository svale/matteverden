<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />

    <h2 class="mb-2">Skriv inn navnet ditt:</h2>
    <form @submit.prevent="submitName" class="inline">
      <input v-model="name" class="p-3 text-center rounded-lg" />
      <button
        class="ml-4 p-4 bg-yellow-dark text-white font-bold border-2 rounded-lg border-yellow"
      >
        Ok
      </button>
    </form>
  </div>
</template>

<script></script>

<style></style>
