<template>
  <div class="nft-main-info-page">
    <nft-main-info-page-welcome />
<!--    <nft-button-to-collection />-->
    <nft-main-info-page-menu />
    <nft-main-info-page-features />
    <nft-main-info-page-legends />
    <nft-main-info-page-about />
    <nft-main-info-page-team />
    <nft-main-info-page-partners />
    <nft-main-info-page-button-top />
  </div>
</template>

<script>
import nftMainInfoPageMenu from "./nft-main-info-page/nft-main-info-page-menu.vue"
import nftMainInfoPageFeatures from "./nft-main-info-page/nft-main-info-page-features.vue";
import nftMainInfoPageLegends from "./nft-main-info-page/nft-main-info-page-legends.vue";
import nftMainInfoPageAbout from "./nft-main-info-page/nft-main-info-page-about.vue";
import nftMainInfoPageTeam from "./nft-main-info-page/nft-main-info-page-team.vue";
import nftMainInfoPageWelcome from "./nft-main-info-page/nft-main-info-page-welcome.vue";
import nftMainInfoPagePartners from "./nft-main-info-page/nft-main-info-page-partners.vue";
import nftMainInfoPageButtonTop from "./nft-main-info-page/nft-main-info-page-button-top.vue";
import nftButtonToCollection from "./nft-main-info-page/nft-button-to-collection.vue";

export default {
  name: "nft-main-info-page",
  components: {
    nftMainInfoPageMenu,
    nftMainInfoPageFeatures,
    nftMainInfoPageLegends,
    nftMainInfoPageAbout,
    nftMainInfoPageTeam,
    nftMainInfoPageWelcome,
    nftMainInfoPagePartners,
    nftMainInfoPageButtonTop,
    nftButtonToCollection,
  }
}
</script>

<style lang="scss">
  .nft-main-info-page {
    display: flex;
    flex-direction: column;

    @media (max-width: 1439px) {
      padding: 0 16px 150px;
      gap: 75px;
    }

    @media (min-width: 1440px) {
      padding-bottom: 25px;
    }

    > * {
      //&:nth-child(2) {
      //  align-self: center;
      //
      //  @media (min-width: 1440px) {
      //    display: none;
      //  }
      //}

      &:nth-last-child(-n+5) {
        &:after {
          @media (max-width: 1439px) {
            display: none;
          }

          @media (min-width: 1440px) {
            content: "";
            display: block;
            position: absolute;
            border-left: 1px solid #F5F5F5;
            border-right: 1px solid #F5F5F5;
            width: 43px;
            box-sizing: border-box;
            height: 100%;
            right: 57px;
          }
        }
      }
    }
  }
</style>