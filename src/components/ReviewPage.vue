<template>
  <div class="pageWrapper">
    <ReviewOrder/>
    <PaymentInfo/>
  </div>
</template>

<script>
import ReviewOrder from "./ReviewOrder"
import PaymentInfo from "./PaymentInfo.vue"


export default {
    components : { ReviewOrder, PaymentInfo }
}
</script>

<style scoped>
  .pageWrapper {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
</style>