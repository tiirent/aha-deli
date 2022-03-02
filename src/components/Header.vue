<template>
  <header class="headerContainer absolute w-100 ph4 ph5-l pv5 pv5-l items-center z-1" :class="{ 'headerContainer--products-page': $route.name === 'products', clip: $route.name === 'cart-checkout' }">
    <div class="absolute absolute--fill flex flex-column items-center w-50 center justify-center">
      <router-link to="/">
        <div
          class="logoContainer dim pointer"
          :class="[isThankYouPathname ? 'fill-cherry' : 'fill-black']">
          <LogoSvg width="100%" height="auto"/>
        </div>
      </router-link>
        <div class="relative absolute--fill flex flex-column justify-center items-center ph3 mt2">
          <router-link to="/products" class="medium-text f7 cherry bg-blossom ttu pv3 ph3 bg-white outline-0 dim pointer self-center no-underline mt1">
            order now
          </router-link>
        </div>
    </div>
    <div class="flex" :class="{ 'scale-animation': cartAnimation }" style="float: right">
      <router-link to="cart-checkout" class="flex flex-row items-center no-underline dim">
        <div
          class="cartIconContainer pointer"
          :class="[isThankYouPathname ? 'fill-cherry' : 'fill-black']"
        >
          <CartIconSvg  width="100%" height="100%"/>
        </div>
        <p class="medium-text f7"
          :class="[isThankYouPathname ? 'cherry' : 'fill-black']"
        >
          {{ cart ? cart.total_items : '0'}}
        </p>
      </router-link>
    </div>
  </header>
</template>
<script>
import LogoSvg from '../assets/logo.svg'
import CartIconSvg from '../assets/cart-icon.svg'

export default {
  name: 'Header',
  props: {
    cart: {
      required: true,
    },
    cartAnimation: {
      required: true
    }
  },
  components: {
    LogoSvg,
    CartIconSvg
  },
  computed: {
    isThankYouPathname() {
      return this.$route.name === 'thank-you';
    }
  }
}
</script>
