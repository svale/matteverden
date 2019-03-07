<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Løs inngangsoppgaven:</h3>
    <calculator></calculator>
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
      tall1: 2,
      tall2: 3,
      sumMax: 20
    };
  },
  computed: {
    fasit: function() {
      return this.tall1 + this.tall2;
    }
    // tall1: function() {
    //   return this.getRandomInt();
    // },
    // tall2: function() {
    //   return this.getRandomInt();
    // }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
