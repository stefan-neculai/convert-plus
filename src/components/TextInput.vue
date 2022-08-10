<template>
    <div class = "inputWrapper">
        <input type="text" class="inputText" @input = "handleInput" v-model = "inputValue" required/>
        <span class="floating-label">{{ title }}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props : ["title", "setter", "defaultValue"],
    data : function() {
        return {
           inputValue: ""
        }
    },
    methods : {
        handleInput : function() {
            console.log("hs")
            this.$store.commit(this.setter, this.inputValue);
        }
    },
    computed : mapState(['clientData', 'cardDetails']),
    mounted() {
        if(this.defaultValue != undefined)
            this.inputValue = this.defaultValue; 
    }
}
</script>

<style scoped>
    input:focus ~ .floating-label,
    input:not(:focus):valid ~ .floating-label{
    top: 4px;
    left: 10px;
    font-size: 8px;
    opacity: 1;
    color: #407cff;
    }

    .inputText {
    padding-top: 5px;
    padding-left: 5px;
    font-size: 14px;
    width: 97%;
    height: 30px;
    }

    .floating-label {
    position: absolute;
    pointer-events: none;
    font-size: 14px;
    left: 15px;
    top: 8px;
    transition: 0.2s ease all;
    color: gray;
    }

    .inputWrapper {
        position: relative;
        width: 90%;
    }

</style>