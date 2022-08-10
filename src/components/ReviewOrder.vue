<template>
    <div class = "cartDetailsWrapper">
        <p> Order summary <router-link to = "/checkout"> (Edit) </router-link></p>
        <div class = "cartDetails">
            <div class = "cartItemWrapper">
                <img alt="" class="image" :src="source" lazy="loaded"/>
                <div class = "text">
                    <h4>{{title}}</h4>
                </div>
            </div>
            <div class = "priceWrapper">
                <p> {{getTotalPrice | round}} {{currency}}</p>
            </div>
        </div>
        <hr/>
        <div class = "footerWrapper">
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
            quantity: '5',
            source : "https://store.nero.com/images/merchant/9cea886b9f44a3c2df1163730ab64994/products/copy_2_VL_maintenance.jpg",
            title : "1 Year Maintenance Nero Backitup Volume License - autorenewal",
            details : "Optional maintenance for Nero Volume Licenses VIP-Level Technical Assistance 1 Free Version Upgrade Guarantees system compatibility"
        }
    },

    computed : {...mapState(["currency"]),
        ...mapGetters(['getConvertedPrice','getQuantity', 'getVAT', 'getTotalPrice'])
    },

    methods : {
        ...mapMutations(['setQuantity'])
    }
}
</script>

<style scoped>
    * > p {
        margin : 0;
    }
    .cartDetailsWrapper {
        padding-top: 15px;
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
    }

    .footerWrapper {
        padding: 0 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>