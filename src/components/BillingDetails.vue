<template>
    <div class = "billingWrapper">
        <h4 class = "header"> Billing Details </h4>
        <hr/>
        <div class = "buttons">
            <button @click="setIsCompany(false)" :class="!getIsCompany? 'selected' : ''"> Personal </button>
            <button @click="setIsCompany(true)" :class="getIsCompany? 'selected' : ''"> Company </button>
        </div>

        <div v-if="getIsCompany" class = "form">
            <TextInput title="Email Address" setter="setEmail" :defaultValue = "clientData['Email Address']"/>
            <OptionSelector :options="countries" title="Country" setter="setCountry" :defaultValue="clientData['Country']"/>
            <TextInput title="Address" setter="setAddress" :defaultValue="clientData['Address']"/>
            <TextInput title="City" setter="setCity" :defaultValue="clientData['City']"/>
            <TextInput title="Zip Code" setter="setZipCode" :defaultValue="clientData['Zip Code']"/>
            <TextInput title="Company" setter="setCompany" :defaultValue="clientData['Company']"/>
            <TextInput title="Phone" setter="setPhone" :defaultValue="clientData['Phone']"/>
        </div>

        <div v-else class = "form">
            <TextInput title="Email Address" setter="setEmail" :defaultValue="clientData['Email Address']"/>
            <OptionSelector :options="countries" title="Country" setter="setCountry" :defaultValue="clientData['Country']"/>
        </div>
    </div>
</template>

<script>
import { countries } from '../data/countries'
import { mapMutations, mapGetters, mapState } from 'vuex';
import TextInput from './TextInput.vue';
import OptionSelector from './OptionSelector.vue';
export default {
    data: function () {
        return {
            countries: countries
        };
    },
    computed: {...mapGetters(['getIsCompany']), ...mapState(['clientData','cardDetails'])},
    methods: mapMutations(["setEmail", "setCountry", "setAddress", "setCity", "setZip", "setCompany", "setVAT", "setPhone", "setIsCompany"]),
    components: { TextInput, OptionSelector }
}
</script>

<style scoped>
    .billingWrapper {
        width: 365px;
        min-height: 350px;
        max-height: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border-radius: 5px;
    }
    
    .buttonWrapper {
        width: 90%;
    }
    
    .buttons {
        width: 90%;
    }
    button {
        border-radius: 2px;
        border: 1px solid gray;
        width: 50%;
        height: 30px;
        color: #2451b2;
        background-color: white;
        font-weight: 700;
        margin-top: 10px;
    }

    .selected {
        border: 1px solid #0151ff;
    }
    
    .form {
        width: 100%;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    hr {
        width: 100%;
    }

    .header {
        margin: 0;
        text-align: left;
        width: 100%;
        height: 50px;
        font-size: 24px;
        padding: 5% 0 0 5%;
        box-sizing: border-box;
    }
</style>