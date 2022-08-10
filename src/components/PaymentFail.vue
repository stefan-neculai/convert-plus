<template>
        <div class = "container">
            <h4> Your payment could not be completed! </h4>
            <p> <span> Card processing error. </span></p>
            <div>
                <h3> Order details </h3>
                <div class = "orderDetails">
                    <div class = "pContainer"> <p> Order Number </p> <p> {{getOrderNumber()}}</p></div>
                    <div class = "pContainer"> <p> Payment Method </p> <p> Credit card</p></div>
                    <div class = "pContainer"> <p> Date </p> <p> {{getDate()}}</p></div>
                    <div class = "pContainer"> <p> Card Number </p> <p> {{ cardDetails['Card Number'] | hideCardNr}}</p></div>
                    <div class = "pContainer"> <p> Total Price </p> <p> {{getTotalPrice + getVAT | round}} {{currency}}</p></div>
                </div>
            </div>
        </div>    
</template>

<script>
import { mapGetters, mapState} from 'vuex';
export default {
    methods : {
        getOrderNumber : function() {
            let res = '';
            res += Math.floor(Math.random() * 9) + 1
            while(res.length != 9) {
                res += Math.floor(Math.random() * 10)
            } 
            return res;
        },
        getDate : function() {
            let dateArray = (new Date()).toString().split(" ")
            return dateArray[1] + " " + dateArray[2] + ", " + dateArray[3]
        }
    },
    computed : {...mapGetters(['getTotalPrice','getVAT']), ...mapState(['currency','cardDetails'])}
}
</script>

<style scoped>

.container {
    width: 750px;
    height: 300px;
    padding: 0 0 0 15px;
    background-color: white;
}

h4 {
    color: red;
    
}

span {
    color: blue;
}

.orderDetails {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

}

.pContainer {
    display: flex;
    width: 300px;
    font-size: 14px;
    justify-content: flex-start;
}

.pContainer p:first-child{
    margin-right: auto;
}
p {
    margin: 0;
}
</style>