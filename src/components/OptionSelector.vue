<template>
    <div class = "selectorWrapper">
        <input list="options" v-model="value" @input = "handleInput"/>
        <span :class="inputClass">{{ title }}</span>
        <datalist id="options">
            <option v-for="(option, index) in options" :key = "index" :value="option.name"/>
        </datalist> 

    </div>
   
</template>

<script>
export default {
    props : ['options', 'title', 'setter','defaultValue'],
    data :
        function() {
            return {
                value : ''
            }
        },
    computed : {
        inputClass : function() {
            if(this.value == '')
                return ''
            return 'notEmpty'
        }
    },
    methods : {
        handleInput : function() {
            this.$store.commit(this.setter, this.value);
        }
    },
    mounted() {
        if(this.defaultValue != undefined)
            this.value = this.defaultValue; 
    }
}
</script>


<style scoped>
    .selectorWrapper {
        width: 90%;
        position: relative;
    }

    .selectorWrapper > input {
        width: 97%;
        height: 30px;
    }

    span {
    position: absolute;
    pointer-events: none;
    font-size: 14px;
    left: 15px;
    top: 8px;
    transition: 0.2s ease all;
    color: gray;
    }

    .notEmpty, input:focus ~ span {
    top: 4px;
    left: 10px;
    font-size: 8px;
    opacity: 1;
    color: blue;
    }

    input {
        padding-top: 5px;
        padding-left: 5px;
    }
</style>