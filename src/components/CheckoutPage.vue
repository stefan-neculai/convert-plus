<template>
  <div class="pageWrapper">
    <CartDetails/>
    <PaySecurely/>
    <NewsletterSubscription/>
    <div class = "card-billing-details">
      <BillingDetails/>
      <CardDetails/>
    </div>
  </div>
</template>

<script>
import CardDetails from "./CardDetails.vue"
import PaySecurely from "./PaySecurely.vue"
import NewsletterSubscription from "./NewsletterSubscription.vue"
import BillingDetails from "./BillingDetails.vue"
import CartDetails from "./CartDetails"

export default {
    components: { CardDetails, PaySecurely, NewsletterSubscription, BillingDetails, CartDetails }
}
</script>

<style scoped>
  .pageWrapper {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
</style>