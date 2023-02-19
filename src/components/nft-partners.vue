<template>
  <div class="nft-partners" dir="auto">
    <router-link
        class="backBtn"
        to="/#mainPagePartners"
    >
      <img src="/src/assets/images/svg/arrowPartners.svg" alt="">
      <h5>{{$t('partners.back')}}</h5>
    </router-link>
    <div class="partners">
      <div class="title">
        <h2>{{$t('mainInfoPage.partners.title')}}</h2>
      </div>
      <div class="partnerList">
        <a
            v-for="partner in partners"
            :href="partner.link"
            rel="nofollow"
            target="_blank"
            :title="partner.link"
        >
          <img
              v-if="partner.type === 'img'"
              :src="'assets/images/partners/' + partner.path"
              alt="Partner logo"
          >

          <video
              v-if="partner.type === 'video'"
              playsinline
              autoplay
              loop
              muted
              :src="'assets/images/partners/' + partner.path"
          ></video>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {partners} from "./nft-main-info-page/nft-main-info-page-partners/partners/index.js";

export default {
  name: "nft-partners",
  data() {
    return {
      partners
    }
  }
}
</script>

<style lang="scss">
  .nft-partners {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;

    @media (max-width: 1439px) {
      padding: 75px 16px;
    }

    @media (min-width: 1440px) {
      padding: 75px calc((100% - 1200px) / 2);
    }

    > .backBtn {
      display: inline-flex;
      align-items: center;
      gap: 15px;


      > img {
        height: 20px;

        &:not(:lang(fa)) {
          transform: rotate(180deg);
        }
      }
    }

    > .partners {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
      width: 100%;

      > .title {
        text-align: center;
        @media (max-width: 1439px) {
          padding-left: 8px;
        }

        @media (min-width: 1440px) {
          padding-left: 10px;
        }
      }

      > .partnerList {
        display: flex;
        gap: 48px;
        flex-wrap: wrap;
        justify-content: center;

        > a {
          display: flex;
          align-items: center;
          @include border-radius(999px);
          overflow: hidden;

          @media (max-width: 1439px) {
            width: 140px;
          }

          @media (min-width: 1440px) {
            width: 200px;
          }

          > * {
            width: 100%;
            @include border-radius(999px);
          }
        }
      }
    }
  }
</style>