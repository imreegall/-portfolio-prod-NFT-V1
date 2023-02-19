<template>
  <div class="nft-collection">
    <ul>
      <router-link to="/collection/nikola_tesla"><h2>НИКОЛА ТЕСЛА</h2></router-link>
      <li><h2>АЛЬБЕРТ ЭНШТЕЙН</h2></li>
      <li><h2>ЧАРЛЬЗ ДАРВИН</h2></li>
      <li><h2>МАРТИН ЛЮТЕР</h2></li>
      <li><h2>ДЖЕЙМС УАТТ</h2></li>
      <li><h2>ЧИНГИСХАН</h2></li>
    </ul>
  </div>

  <nft-main-info-page-button-top />
</template>

<script>
import nftMainInfoPageButtonTop from "../nft-main-info-page/nft-main-info-page-button-top.vue";

export default {
  name: "nft-collection",
  components: {
    nftMainInfoPageButtonTop,
  }
}
</script>

<style lang="scss">
  .nft-collection {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 90px 0;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 52px;
    }
  }
</style>