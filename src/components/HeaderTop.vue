<template>
    <div class = "header">
        <div class = "logoWrapper">
            <img alt="NERO" class="logo" :src="source" lazy="loaded"/>
        </div>

        <div class = "selectorsWrapper">
            <select v-model="selectedCurrency" @change="setCurrency(selectedCurrency)">
                <option  v-for="[key, value] of Object.entries(currencies)" :key="key" :selected = "key == 'RON'? 'selected' : ''"> {{value}} ({{key}})</option>
            </select>
            <select v-model="language">
                <option  v-for="(language, index) in languages" :key="index" :selected="getLangName(language)=='English'? 'selected' : ''" > {{getLangName(language)}} ({{language.code.toUpperCase()}})</option>
            </select>
            <p v-if="getHeaderPrice">
                Total: {{getTotalPrice + getVAT | round}} {{currency}}
            </p>
        </div>
    </div>
</template>

<script>
import { languages } from "../data/languages"
import { currencies } from "../data/currencies"
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
    data : function() {
        return {
            selectedCurrency: "Romanian Leu (RON)",
            language: "English (EN)",
            source : "https://store.nero.com/images/merchant/9cea886b9f44a3c2df1163730ab64994/Nero_logo_black.png",
            languages : languages.sort((a,b) => a.name < b.name ? -1 : a.name > b.name),
            currencies : currencies
        }
    },
    computed : {
        ...mapGetters(['getTotalPrice','getHeaderPrice','getVAT']),
        ...mapState(['currency'])
    },
    methods : {
        getLangName : function(language) {
            return language.nativeName.split(",")[0].split(";")[0];
        },
        ...mapMutations(['setCurrency'])
    }
}
</script>

<style scoped>
    .header {
        box-sizing: border-box;
        padding: 0 500px;
        background-color: white;
        z-index: 2;
        width: 100%;
        height: 20%;
        position: sticky;
        top: 0px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        box-shadow: 0px 10px 15px gray;
        margin-bottom: 20px;
    }

    .logoWrapper {
        display: flex;
        align-items: flex-start;
        width: 100%;
    }
    .selectorsWrapper {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: #fafafa;
        width: 100vw;
        height: 50px;
        padding: 0 500px;
        gap: 5px;
    }
</style>