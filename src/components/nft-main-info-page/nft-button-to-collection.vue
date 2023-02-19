<template>
  <div class="nft-button-to-collection">
    <router-link to="/">
      <button class="nft-btn">
        ПЕРЕЙТИ К КОЛЛЕКЦИИ
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "nft-button-to-collection"
}
</script>

<style lang="scss">
  .nft-button-to-collection {

    button {
      @include border-radius(20px);
      background: none;
      color: $whiteSmoke !important;
      align-self: center;
      padding: 24px 80px;
      border: 1px solid $whiteSmoke;
    }
  }
</style>