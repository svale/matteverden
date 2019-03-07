<template>
  <div>
    <h2>
      {{ digitOne }} + {{ digitTwo }} =
      <form @submit.prevent="submitAnswer" class="inline">
        <input v-model="svar" class="w-16 h-16 p-3 text-center" />
      </form>
    </h2>
    <h3>{{ feedback }}</h3>
  </div>
</template>

<script>
export default {
  name: 'calculator',
  props: {
    operator: {
      type: String,
      default: 'plus'
    },
    digitOne: {
      type: Number,
      default: 2
    },
    digitTwo: {
      type: Number,
      default: 3
    },
    sumMax: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      svar: null,
      feedback: ''
    };
  },
  computed: {
    fasit: function() {
      return this.digitOne + this.digitTwo;
    }
  },
  methods: {
    getRandomInt: function(min = 1, max = 9) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },

    submitAnswer: function() {
      this.feedback = 'Ooops, prøv igjen!';
      if (+this.svar === this.fasit) {
        // enter
        this.$router.push({ path: 'register' });
        // feeback
        this.feedback = `JA! Det er helt rett! ${this.digitOne} + ${
          this.digitTwo
        } = ${this.fasit}`;
        this.digitOne = this.getRandomInt();
        this.digitTwo = this.getRandomInt(1, this.sumMax - this.digitOne);
      }
      this.svar = null;
    }
  }
};
</script>

<style></style>
