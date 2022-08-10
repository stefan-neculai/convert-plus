import Vue from "vue"
import Vuex from "vuex"
import { rates } from "../data/rates"

Vue.use(Vuex)

const convertFromTo = function(amount, from, to) {
    let rate =  rates[to] / rates[from]
    return rate * amount
}
export const store = new Vuex.Store({
    state :
        {
            currency : 'RON',
            price: 35,
            quantity: '5',
            headerPrice : false,
            isComapny : false,
            clientData : {},
            cardDetails : {},
        },
    getters :
        {
            getQuantity(state) {
                return state.quantity
            },

            getTotalPrice(state, getters) {
                return getters.getUnitPrice * state.quantity
            },

            getUnitPrice(state) {
                let convertedUnitPrice = convertFromTo(state.price, 'USD', state.currency)
                if(state.quantity >= 50)
                    return convertedUnitPrice * 0.5
                if(state.quantity >= 10)
                    return convertedUnitPrice * 0.75
                if(state.quantity >= 5)
                    return convertedUnitPrice * 0.9
                return convertedUnitPrice
            },

            getConvertedPrice(state) {
                return convertFromTo(state.price, 'USD', state.currency)
            },

            getVAT(state, getters) {
                return 0.19 * getters.getTotalPrice
            },

            getHeaderPrice(state) {
                return state.headerPrice
            },

            getIsCompany(state) {
                return state.isComapny
            }
        },
    mutations :
        {
            setEmail(state, email) {
                state.clientData['Email Address'] = email
            },

            setCountry(state, country) {
                state.clientData['Country'] = country
            },
            
            setAddress(state, address) {
                state.clientData['Address'] = address
            },

            setCity(state, city) {
                state.clientData['City'] = city
            },

            setZipCode(state, zipCode) {
                state.clientData['Zip Code'] = zipCode
            },

            setCompany(state, company) {
                state.clientData['Company'] = company
            },

            setVAT(state, VAT) {
                state.clientData['VAT code'] = VAT
            },

            setPhone(state, phone) {
                state.clientData['Phone'] = phone
            },

            setCurrency(state, currency) {
                let code = currency.split('(')
                code = code[code.length - 1]
                code = code.slice(0, code.length-1)
                state.currency = code
            },

            setQuantity(state, quantity) {
                if(quantity < 5 || quantity > 249)
                    return state.quantity

                state.quantity = quantity
            },

            setHeaderPrice(state, value) {
                state.headerPrice = value
            },

            setCardNumber(state, cardNumber) {
                state.cardDetails['Card Number'] = cardNumber
            },

            setExpirationDate(state, expirationDate) {
                state.cardDetails['Expiration Date'] = expirationDate
            },

            setSecurityCode(state, securityCode) {
                state.cardDetails['Security Code'] = securityCode
            },

            setNameOnCard(state, nameOnCard) {
                state.cardDetails['Name on card'] = nameOnCard
            },

            setIsCompany(state, value) {
                state.isComapny = value
            }

        }
})