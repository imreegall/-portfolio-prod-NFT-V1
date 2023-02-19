<template>
  <div class="nft-main-info-page-partners" id="mainPagePartners">
    <aside dir="auto">
      <router-link to="/partners">
        <div class="title">
          <h2 class="greenText">{{$t('mainInfoPage.partners.title')}}</h2>
        </div>
        <img src="/src/assets/images/svg/arrowPartners.svg" alt="">
      </router-link>
    </aside>
  </div>
</template>

<script>
import {partners} from "./nft-main-info-page-partners/partners/index.js";

export default {
  name: "nft-main-info-page-partners",
  data() {
    return {
      partners
    }
  }
}
</script>

<style lang="scss">
  .nft-main-info-page-partners {
    position: relative;
    display: flex;
    justify-content: center;

    aside {
      display: flex;

      @media (max-width: 1439px) {
        width: 100%;
        justify-content: center;
      }

      @media (min-width: 1440px) {
        width: 1200px;
        padding-bottom: 150px;
      }

      a {
        display: inline-flex;
        align-items: center;

        @media (max-width: 1439px) {
          gap: 25px;
        }

        @media (min-width: 1440px) {
          gap: 45px;
        }

        .title {
          @media (max-width: 1439px) {
            margin-left: 8px;
          }

          @media (min-width: 1440px) {
            margin-left: 10px;
          }
        }

        img {
          @media (max-width: 1439px) {
            height: 25px;
          }

          @media (min-width: 1440px) {
            height: 40px;
          }

          &:lang(fa) {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
</style>