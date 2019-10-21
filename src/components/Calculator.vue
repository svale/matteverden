<template>
  <div>
    <transition name="fade">
      <h2 v-if="showCalculator">
        {{ leftSide }} + {{ rightSide }} =
        <form @submit.prevent="submitAnswer" class="inline">
          <input v-model="svar" class="w-16 h-16 p-3 text-center rounded-lg" />
          <button
            class="ml-4 p-4 bg-yellow hover:bg-yellow-dark text-white font-bold rounded-lg"
          >
            Ok
          </button>
        </form>
      </h2>
    </transition>
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
      default: 1
    },
    digitTwo: {
      type: Number,
      default: 1
    },
    sumMax: {
      type: Number,
      default: 20
    },
    seriesLength: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      leftSide: this.digitOne,
      rightSide: this.digitTwo,
      svar: null,
      feedback: '',
      count: 1,
      showCalculator: true
    };
  },
  computed: {
    // leftSide() {
    //   return this.digitOne;
    // },
    // rightSide() {
    //   return this.digitTwo;
    // },
    fasit: function() {
      return this.leftSide + this.rightSide;
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
      // svaret er rett
      if (+this.svar === this.fasit) {
        // Gi beskjed oppover hvis de lytter
        if (this.$listeners.success) {
          this.$emit('success');
        }

        // feeback
        this.feedback = `
          JA! Det er helt rett!
          ${this.leftSide} + ${this.rightSide} = ${this.fasit}
        `;

        // skal vi gi et regnestykke til?
        if (this.count < this.seriesLength) {
          this.leftSide = this.getRandomInt();
          this.rightSide = this.getRandomInt(1, this.sumMax - this.leftSide);
          this.count++;
        } else {
          // fade ut calculatoren
          this.showCalculator = false;
        }
      }
      this.svar = null;
    }
  }
};
</script>

<style></style>
