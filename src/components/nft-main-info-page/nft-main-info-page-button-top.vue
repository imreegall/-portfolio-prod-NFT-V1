<template>
  <div class="nft-main-info-page-button-top">
    <router-link
        to=""
        v-scroll-to="'#app'"
    >
      <img src="/src/assets/images/svg/arrowTop.svg" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "nft-main-info-page-button-top"
}
</script>

<style lang="scss">
  .nft-main-info-page-button-top {
    @media (max-width: 1439px) {
      display: none;
    }

    @media (min-width: 1440px) {
      border-top: 1px solid #F5F5F5;
      border-bottom: 1px solid #F5F5F5;
      width: 100%;
      height: 75px;
      bottom: 0;
      display: flex;
      align-items: center;
      position: relative;

      > a {
        position: absolute;
        right: 117px;

        img {
          width: 52px;
          height: 52px;
        }
      }
    }
  }
</style>