<template>
  <div class="nft-burger-menu">
    <section>
      <router-link
          v-for="nav in navigationsList"
          to="/"
          v-scroll-to="{
            el: nav.anchor,
            offset: -50,
            onStart: closeBurgerMenu
          }"
      >
        <h6>
          {{$t('nav.burgerMenu.' + nav.name)}}
        </h6>
      </router-link>
    </section>
  </div>
</template>

<script>
import dispatchEventsForElem from "./mixins/dispatchEventsForElem.js";
import {navigationsList} from "./nft-navigation/navigationLinks/index.js";

export default {
  name: "nft-burger-menu",
  data() {
    return {
      navigationsList
    }
  },
  methods: {
    //закрытие меню и открытие вкладок с плюсиками при нажатии на ссылку
    closeBurgerMenu(elem) {
      const burgerBtn = document.querySelector('.nft-navigation-burger')
      dispatchEventsForElem(burgerBtn, 'click')

      if (!elem.classList.contains('active')) {
        dispatchEventsForElem(elem, 'click')
      }
    }
  }
}
</script>

<style lang="scss">
  .nft-burger-menu {
    @media (max-width: 1439px) {
      display: none;
      position: fixed;
      width: 100%;
      height: 100vh;
      background-color: #83F84C;
      top: 0;
      left: 0;
      justify-content: center;
      padding: 79px 0;
      z-index: 5;

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        max-height: 342px;

        > * {
          color: #47145F;
        }
      }

      &.active {
        display: flex;
      }
    }

    @media (min-width: 1440px) {
      display: none;
    }
  }
</style>