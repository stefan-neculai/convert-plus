<template>
    <div class = "container">
        <div class = "information">
            <div class = "billingInfo">
           
                <h4> Billing Information <router-link to = "/checkout"> (Edit) </router-link></h4>
                <p v-for="(value, key) in clientData" :key="key">
                    {{key}}: {{value}}
                </p>
            </div> 
            <div class = "paymentInfo"> 
                <h4> Payment Information <router-link to = "/checkout"> (Edit) </router-link></h4>
                <p> Payment method: VISA</p>
                <p>
                    Card number: {{cardDetails['Card Number'] | hideCardNr}}
                </p>
                <p>
                    Expiration date: {{cardDetails['Expiration Date']}}
                </p>
                <p>
                    Security code: {{cardDetails['Security Code'] | hide}}
                </p>
                <p>
                    Name on Card: {{cardDetails['Name on card']}}
                </p>

            </div>
        </div>
        <hr/>
         <router-link to="/checkout/retry"> <button> Place Order </button> </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed : mapState(['clientData','cardDetails']),
}
</script>

<style scoped>
    * > p {
        margin : 0;
    }
    .container {
        padding-top: 15px;
        width: 750px;
        height: 340px;
        background-color: white;
        margin: 1px solid black;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }

    .information {
        margin-left: 25px;
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: flex-start;
    }

    .billingInfo {
        margin-right: auto;
    }

    .paymentInfo {
        margin-right: auto;
    }
    button {
        border-radius: 2px;
        border: 1px solid gray;
        background-color: green;
        height: 30px;
        width: 300px;
        color: white;
        font-weight: 700;
    }

    hr {
        width: 100%;
    }

</style>