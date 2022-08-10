<template>
    <div class = "wrapper">
        <h4> Pay securely with </h4>
        <div>
            <font-awesome-icon icon="fa-brands fa-cc-visa" />
            <font-awesome-icon icon="fa-brands fa-cc-mastercard" />
        </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .wrapper {
        width: 750px;
        height: 60px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2.5% 0 2.5%;
        box-sizing: border-box;
    }

    .wrapper > div {
        border: 1px solid blue;
        height: 30px;
        width: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        font-size: 25px;
        
    }
</style>