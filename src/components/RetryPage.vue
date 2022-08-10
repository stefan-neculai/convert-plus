<template>
  <div class="pageWrapper">
    <PaymentFail/>
    <CardDetails/>
  </div>
</template>

<script>
import PaymentFail from "./PaymentFail.vue"
import CardDetails from "./CardDetails.vue"


export default {
    components : { PaymentFail, CardDetails }
}
</script>

<style scoped>
  .pageWrapper {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  .cardWrapper {
    width: 750px;
  }


</style>