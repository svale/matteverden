<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <form @submit.prevent="submitForm">
      <fieldset>
        <label for="userName" class="mb-2 block font-bold text-xl"
          >Skriv inn navnet ditt:</label
        >
        <input
          v-model="userName"
          id="userName"
          class="p-3 mb-4 text-center rounded-lg"
        />
      </fieldset>
      <transition name="fade">
        <fieldset v-if="form.step > 1">
          <h2 for="userCLass" class="mb-2 block font-bold text-xl">
            Hvilken klasse går du i?
          </h2>
          <ol class="flex list-reset justify-center mb-16">
            <li v-for="trinn in classes" :key="trinn" class="mb-2">
              <input
                type="radio"
                name="userClass"
                :id="`class${trinn}`"
                :value="trinn"
                v-model="userClass"
                class="invisible class-selector"
              />
              <label
                :for="`class${trinn}`"
                class="class-selector-label block font-bold bg-yellow-dark text-white font-bold border-2 rounded-lg border-yellow py-5 px-2"
              >
                Klasse {{ trinn }}
              </label>
            </li>
          </ol>
        </fieldset>
      </transition>
      <transition name="fade">
        <fieldset v-show="showButton">
          <button
            class="ml-4 p-4 bg-yellow-dark text-white font-bold border-2 rounded-lg border-yellow"
          >
            {{ buttonLabel }}
          </button>
        </fieldset>
      </transition>
    </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  data: () => {
    return {
      userName: '',
      userClass: 0,
      form: {
        step: 1
      },
      classes: [1, 2, 3, 4, 5, 6, 7]
    };
  },
  computed: {
    buttonLabel() {
      if (this.form.step < 2) return 'Jepp!';
      return 'Videre';
    },
    showButton() {
      if (this.form.step < 2) return true;
      if (this.form.step === 2 && this.userClass > 0) return true;
      return false;
    }
  },
  methods: {
    submitForm() {
      if (this.form.step < 2) this.form.step++;
      else {
        this.$router.push({ path: 'start' });
      }
    }
  }
};
</script>

<style>
body {
  background-color: #36acfe;
}

:checked + label {
}
.class-selector:checked + .class-selector-label {
  @apply bg-green-dark border-green-darker;
}
</style>
