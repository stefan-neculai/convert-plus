<template>
    <footer>
        <div class="whoIsPopUp" v-if="whoIsPopUp">
            <div class="whoIsPopUpWrapper" >
                <div class = "whoIsHeader"> Who is 2Checkout? </div>
                <p>For your convenience, we teamed up with 2Checkout to provide a secure and reliable platform for selling our software products online. The whole ordering process is supported by 2Checkout, who handles all transactions details. Your private data is 100% safe, as 2Checkout complies with the latest online security standards.
</p>
                
                <button @click="whoIsPopUp=false" class = "popUpButton"> Close </button>
            </div>
        </div>
        <div class = "topHalf">
            <img src="https://store.nero.com/checkout/themes/default/images/logos/2checkout-logo.svg" class="logo"/>
            <p>Your payment is securely processed by our partner, 2Checkout. <a href="#" @click = "whoIsPopUp=true">Who is 2Checkout?</a></p>
        </div>
        <div class = "botHalf">
            <p> Order processed by our payments partner 2Checkout. </p>
            <p> Verifone Payments BV dba 2Checkout | [Mail address: P.O. Box 11334, 1001 GH Amsterdam] Singel 250, 4th floor, Amsterdam, 1016AB, Netherlands </p>
            <p> <a href="https://www.2co.com/terms.html?MOR=active">Terms and conditions</a> | <a href="https://www.2co.com/privacy.html?MOR=active">Privacy policy</a> | <a href="https://www.2co.com/refund.html?MOR=active">Refund policy</a> | <a href="https://www.2co.com/right-of-withdrawal.html">Right of Withdrawal</a></p>
        </div>
    </footer>    
</template>

<script>
export default {
    data : function() {
        return {
            whoIsPopUp: false
        }
    },
    watch : {
        whoIsPopUp : function(value) {
            if(value) {
                let x = window.scrollX;
                let y = window.scrollY;
                document.querySelector("html").classList.add("hideScroll");
                console.log(x,y);
                window.scrollTo(x,y);
            }
            else {
                document.querySelector("html").classList.remove("hideScroll");
            }
        }
    }
}
</script>

<style scoped>
    footer { 
        width: 100%;
        height: 25vh;
        font-size: small;
    }

    footer > div {
        height: 50%;
        width: 100%;
    }

    .topHalf {
        background-color: white;
        padding: 0 0 0 28.5%;
    }

    .botHalf {
        text-align: center;
    }
    img {
        width: 150px;
        height: 50px;
    }

    .whoIsPopUp {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(128,128,128,0.2);
        z-index: 20;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .whoIsPopUpWrapper {
        width: 500px;
        height: 150px;
        background-color: white;
        padding: 0 15px;
        
    }
    
    .whoIsHeader {
        position: relative;
        top: 0;
        left: -15px;
        padding-left: 15px;
        box-sizing: border-box;
        width: 530px;
        height: 40px;
        background-color: blue;
        color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center
    }

    .popUpButton {
        background-color: white;
        color: blue;
        border: 1px solid rgb(224, 221, 221);
    }

    .whoIsPopUpWrapper p {
        margin-bottom: 20px;
        font-size: 12px;
    }

    .whoIsPopUpWrapper > h4 {
        font-size: 16px;
    }
</style>