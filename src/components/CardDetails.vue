<template>
    <div class = "cardWrapper">
        <h4 class = "header"> Card Details </h4>
        <hr/>
        <div class = "form">
            <TextInput title="Card number" setter='setCardNumber' :defaultValue="cardDetails['Card Number']"/>
            <TextInput title="Expiration date" setter='setExpirationDate' :defaultValue="cardDetails['Expiration Date']" />
            <TextInput title="Security code" setter='setSecurityCode' :defaultValue="cardDetails['Security Code']"/>
            <TextInput title="Name on card" setter='setNameOnCard' :defaultValue="cardDetails['Name on card']"/>
            <p v-if="!getIsCompany">By placing the order you are confirming that you are over 16 years of age and you agree with <a href="https://www.2co.com/terms.html?MOR=active">2Checkout’s terms and conditions.</a></p>
            <router-link to="/checkout/review"><button @click="scrollTop"> Continue to review </button></router-link>
            
        </div>
    </div>
</template>

<script>
import TextInput from './TextInput.vue';
import { mapMutations, mapGetters, mapState } from 'vuex';
export default {
    data: function () {
        return {
            isCompany: false,
            countries: ["Romania", "United States", "United Kingdom", "France", "Germany", "China", "Japan", "Canda"].sort()
        };
    },
    computed : {...mapGetters(['getIsCompany']), ...mapState(['cardDetails'])},
    methods: {...mapMutations(['setCardNumber', 'setExpirationDate', 'setSecurityCode', 'setNameOnCard']), 
        scrollTop : function() {
            window.scroll(0,0);
        }},
    components: { TextInput }
}
</script>

<style scoped>
    .cardWrapper {
        width: 365px;
        min-height: 350px;
        max-height: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border-radius: 5px;
    }

    .cardWrapper > * {
        width: 90%;
    }
    
    .buttonWrapper {
        width: 90%;
    }

    .button, button {
        border-radius: 2px;
        border: 1px solid gray;
        background-color: green;
        height: 30px;
        width: 9,0%;
        color: white;
        font-weight: 700;
    }

    hr {
        width: 100% !important;
    }

    .header {
        margin: 0;
        text-align: left;
        width: 100%;
        height: 50px;
        font-size: 24px;
        padding: 18.25px 0 0 18.25px;
        box-sizing: border-box;
    }

    .form {
        width: 100%;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    p {
        text-align: center;
    }
</style>