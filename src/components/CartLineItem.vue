<template>
  <div class="">
    <div class="flex flex-row justify-between items-center ph4 pv2">
      <button
        @click="removeProductFromCart"
        class="cartIconContainer dim pointer pa0 bg-none">
        <RemoveIconSvg width="100%" height="auto" />
      </button>
      <div class="w-25">
        <div
           class="aspect-ratio aspect-ratio--1x1"
           :style="{
             backgroundRepeat: 'no-repeat',
             backgroundPosition: 'center',
             backgroundSize: 'contain',
             backgroundImage: `url(${/\b(\w*sock(s)?\w*)\b/.test(item.name.trim('').toLowerCase()) ? require('../assets/updated-sock-image.png') : require('../assets/pair-shoes-small.png')})` // checks if regex matches socks or sock
             // in order to render proper cart line item image. ideally we would have a media
             // property in the cart line-item objects
           }"
         />
      </div>
      <p class="medium-text f6 white tr ttu mw4 lh-title">
        {{item.name}}
        <span v-if="item.variants" class="db f7 pt1">
          {{ item.variants[0].option_name }}
        </span>
        <span class="db f7 pt1">
          ${{item.line_total.formatted_with_code}}
        </span>
        <span class="db">
          <div class="flex flex-row items-center justify-end">
            <button class="bg-none white f4 pointer grow dim ph2" @click="() => updateQuantity(item.quantity - 1)">-</button>
            <span class="ttl">x</span>{{item.quantity}}
            <button class="bg-none white f5 pointer grow dim ph2" @click="() => updateQuantity(item.quantity + 1)">+</button>
          </div>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
import RemoveIconSvg from '../assets/remove-icon.svg'

export default {
  name: "CartLineItem",
  props: ["item"],
  components: {
    RemoveIconSvg
  },
  methods: {
    removeProductFromCart() {
      this.$emit('remove-product-from-cart', this.item.id)
    },
    updateQuantity(quantity) {
      this.$emit('update-quantity', this.item.id, quantity)
    }
  }
}
</script>
