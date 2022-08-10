<template>
  <div id="app">
    <HeaderTop/>
    <router-view>
    </router-view>
    <PageFooter/>
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue'
import PageFooter from './components/PageFooter.vue'


export default {
  name: 'App',
  components: {
    HeaderTop,
    PageFooter
},
  methods : {
    getCurrencies() {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "kzqis4P7PlR49r4a3QXDtK3dFrdTXOCe");

      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };

      fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    getRates() {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "kzqis4P7PlR49r4a3QXDtK3dFrdTXOCe");

      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };

      fetch(`https://api.apilayer.com/fixer/${this.getCurrentDate()}?base=USD`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error)); 
    },
    getCurrentDate() {
      let today = new Date();
      return today.getFullYear() + '-' + ((today.getMonth() > 8)? '':'0') + (today.getMonth() + 1) + '-' + today.getDate();
    }
    ,
    handleScroll() {
      if(window.scrollY > 339) {
        this.$store.commit('setHeaderPrice', true);
      }
      else {
        this.$store.commit('setHeaderPrice', false);
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
  body {
    margin : 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  #app {
    width: 100vw;
    background-color: #f2f2f2;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .card-billing-details {
    display: flex;
    gap: 20px;
  }

  .hideScroll {
      overflow: hidden;
  }

  html {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }
</style>
