<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3 class="mb-4">Løs inngangsoppgaven:</h3>
    <calculator
      :digitOne="tall1"
      :digitTwo="tall2"
      v-on:success="enter"
      :seriesLength="1"
    ></calculator>
  </div>
</template>

<script>
import Calculator from '@/components/Calculator.vue';
export default {
  name: 'Splash',
  components: {
    Calculator
  },
  data: () => {
    return {
      svar: null,
      feedback: '',
      sumMax: 20
    };
  },
  computed: {
    // fasit: function() {
    //   return this.tall1 + this.tall2;
    // }
    tall1: function() {
      return this.getRandomInt();
    },
    tall2: function() {
      return this.getRandomInt(1, 10 - this.tall1);
    }
  },
  props: {
    msg: String
  },
  methods: {
    getRandomInt: function(min = 1, max = 9) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    enter() {
      setTimeout(() => {
        this.$router.push({ path: 'register' });
      }, 2000);
    }
  }
};
</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
