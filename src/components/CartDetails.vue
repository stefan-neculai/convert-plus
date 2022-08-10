<template>
    <div class = "cartDetailsWrapper">
        <div class="discountPopUp" v-if="discountPopUp">
            <div class="discountPopUpWrapper" >
                <div class = "discountHeader"> Volume discounts </div>
                <h4> 1 Year Maintenance Nero Backitup Volume License - autorenewal </h4>
                <p> We offer volume discount prices for this product, as displayed below </p>
                <div class = "row">
                    <p> Quantity </p>
                    <p> Unit price </p>
                </div>
                <hr/>
                <div class = "row">
                    <p> 5-9 </p>
                    <p> {{getConvertedPrice * 0.9 | round}} {{currency}}  </p>
                </div>
                <div class = "row">
                    <p> 10-49 </p>
                    <p> {{getConvertedPrice * 0.75 | round}} {{currency}} </p>
                </div>
                <div class = "row">
                    <p> 50-249 </p>
                    <p> {{getConvertedPrice * 0.5 | round}} {{currency}} </p>
                </div>
                
                <button @click="discountPopUp=false" class = "popUpButton"> Close </button>
            </div>
        </div>
        <div class = "cartDetails">
            <div class = "cartItemWrapper">
                <img alt="" class="image" :src="source" lazy="loaded"/>
                <div class = "text">
                    <h4>{{title}}</h4>
                    <p>{{details}}</p>
                    <p><a href="#" @click="discountPopUp = true">Volume discounts</a></p>
                </div>
            </div>
            <div class = "quantityInputWrapper">
                <p @click = "setQuantity(getQuantity-1)">-</p>
                <input type = "text" :value="getQuantity" @input="verifyInput()" class = "quantityInput"/>
                <p @click = "setQuantity(-(-getQuantity)+1)">+</p>
            </div>
            <div class = "priceWrapper">
                <p> {{getTotalPrice | round}} {{currency}}</p>
                <font-awesome-icon class = "trashIcon" icon="fa-solid fa-trash-can" />
            </div>
        </div>
        <hr/>
        <div class = "footerWrapper">
            <p> I have a coupon code </p>
            <div>
                <h4> Total {{getTotalPrice + getVAT | round}} {{currency}} </h4>
                <p> Includes 19% VAT ({{getVAT | round}} {{currency}})</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
    data : function() {
        return {
            source : "https://store.nero.com/images/merchant/9cea886b9f44a3c2df1163730ab64994/products/copy_2_VL_maintenance.jpg",
            title : "1 Year Maintenance Nero Backitup Volume License - autorenewal",
            details : "Optional maintenance for Nero Volume Licenses VIP-Level Technical Assistance 1 Free Version Upgrade Guarantees system compatibility",
            discountPopUp : false
        }
    },

    computed : {...mapState(["currency", "price"]),
        ...mapGetters(['getTotalPrice','getUnitPrice','getQuantity', 'getVAT','getConvertedPrice'])
    },

    methods : {
        ...mapMutations(['setQuantity']),
        verifyInput : function() {
            let inputValue = document.querySelector(".quantityInput").value
            if(inputValue > 249) {
                document.querySelector(".quantityInput").value = 249
                this.setQuantity(249)
                return
            }
            if(inputValue < 5) {
                document.querySelector(".quantityInput").value = 5
                this.setQuantity(5)
                return
            }
            this.setQuantity(inputValue)
        }
    },

    watch : {
        discountPopUp : function(value) {
            if(value) {
                document.querySelector("html").classList.add("hideScroll");
            }
            else {
                document.querySelector("html").classList.remove("hideScroll");
            }
        }
    }
}
</script>

<style scoped>
    p {
        margin : 0;
        font-size: 14px;
    }

    .cartDetailsWrapper {
        box-sizing: border-box;
        padding: 15px 15px 0 0;
        width: 750px;
        height: 340px;
        background-color: white;
        margin: 1px solid black;
        border-radius: 5px;
    }
    .cartDetails {
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: space-between;
    }

    .cartDetails::before {
        z-index: 1;
        content: "Secure Checkout";
        position: absolute;
        top: 120px;
    }

    .cartItemWrapper {
        width: 350px;
        height: 80px;
        display: flex;
        justify-content: space-evenly;
    }
    .image {
        width: 100px;
        height: 70px;
    }
    
    .quantityInputWrapper {
        width: 150px;
        height: 20px;
        display: flex;
    }

    .quantityInputWrapper > p{
        user-select: none;
        height: 20px;
        width: 30px;
        line-height: 20px;
        text-align: center;
        color: blue;
        font-size: 20px;
        font-weight: 400;
    }

    .quantityInput {
        padding: 0 0 0 10px;
        width: 30px;
    }

    .priceWrapper {
        width: 100px;
        text-align: center;
        display: flex;
        gap: 5px;
    }

    .footerWrapper {
        padding: 0 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    

    .discountPopUp {
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

    .discountPopUpWrapper {
        width: 500px;
        height: 300px;
        background-color: white;
        padding: 0 15px;
        
    }
    
    .discountHeader {
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

    .row {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        height: 30px;
        padding-top: 5px;
        box-sizing: border-box;
    }

    .row > p:first-child {
        margin-right: auto;
    }

    .row:hover {
        background-color: #f5f5f5;
    }

    .popUpButton {
        background-color: white;
        color: blue;
        border: 1px solid rgb(224, 221, 221);
    }

    .discountPopUpWrapper p {
        margin-bottom: 20px;
        font-size: 12px;
    }

    .discountPopUpWrapper > h4 {
        font-size: 16px;
    }

    hr {
        margin: 0;
    }

    .trashIcon:hover {
        color: red;
        transition: color 0.2s;
    }

 

</style>