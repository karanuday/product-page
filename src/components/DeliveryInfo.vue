/* Created a separate component for Delivery Info to be reusable anywhere such information is required.
It is also customizable to an extent, under the 'FREE RETURN' section*/
<template>
  <div class="delivery-info f-14">
    <h2>Delivery</h2>
    <p>
      SHIPPING WORLDWIDE <br/>
      We ship to over 49 countries worldwide.
    </p>

    <p>
      FREE RETURN <br/>
      <slot>
        We want to make sure you love your CARIUMA sneakers! Enjoy free return when you shop with us.
      </slot>
    </p>

    <p>
      COMPLIMENTARY GIFT PACKAGING <br/>
      Our packaging is inspired by the exotic warmth of Rio, bringing a taste of Brazil to the world. We use a high-quality box made using recycled and recyclable materials.
    </p>
  </div>
</template>

<style scoped>
.delivery-info {
  flex: 1 0 30%;
  line-height: 26px;
  text-align: left;
}
</style>