<template>
  <div class="nft-main-info-page-team">
    <div class="teamCont">
      <h2 class="greenText" dir="auto">{{$t('mainInfoPage.team.members')}}</h2>
      <div class="teammates">

        <div
            class="teammate"
            v-for="employee in this.employees"
        >
          <img :src="'assets/images/employees/' + employee.img + '.png'" alt="">
          <p>{{$t('mainInfoPage.team.names.' + employee.name)}}</p>
          <p dir="auto">{{$t('mainInfoPage.team.posts.' + employee.post)}}</p>
        </div>

      </div>
      <button><a rel="nofollow" target="_blank" title="https://t.me/historicalcollection" href="https://t.me/historicalcollection"><img src="/src/assets/images/svg/telegram.svg" alt=""></a></button>
    </div>
  </div>
</template>

<script>
import {employees} from "./nft-main-info-page-team/employees/index.js";

export default {
  name: "nft-main-info-page-team",
  data() {
    return {
      employees
    }
  }
}
</script>

<style lang="scss">
  .nft-main-info-page-team {
    display: flex;
    position: relative;
    justify-content: center;
    @include user-select(none);

    .teamCont {
      display: flex;
      flex-direction: column;
      position: relative;
      @include user-select(text);
      box-sizing: content-box;

      @media (max-width: 1439px) {
        width: 300px;
        gap: 42px;
        align-items: center;
        padding: 0 8px;
      }

      @media (min-width: 1440px) {
        width: 1200px;
        gap: 84px;
        padding-bottom: 150px;
      }

      > h2 {
        @media (max-width: 1439px) {
          margin-left: 8px;
        }

        @media (min-width: 1440px) {
          margin-left: 10px;
        }
      }

      .teammates {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 42px;

        @media (max-width: 1439px) {
          @include column-gap(60px)
        }

        @media (min-width: 1440px) {
          @include column-gap(48px);
        }

        .teammate {
          color: #83F84C;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          @media (max-width: 1439px) {
            flex-basis: calc((100% - 60px) / 2);
          }

          @media (min-width: 1440px) {
            flex-basis: calc((100% - 48px * 4) / 5);
          }

          > img {
            @include border-radius(999px);
            @include user-select(none);

            @media (max-width: 1439px) {
              width: 100px;
              height: 100px;
              margin-bottom: 18px;
            }

            @media (min-width: 1440px) {
              width: 158px;
              height: 158px;
              margin-bottom: 52px;
            }
          }

          > p {
            @media (max-width: 1439px) {
              width: 120px;
            }

            @media (min-width: 1440px) {
              width: 160px;
            }

            &:first-of-type {
              font-family: 'Montserrat', sans-serif;
              font-style: normal;
              font-weight: 600;
              line-height: 130.5%;
              letter-spacing: 0.005em;

              @media (max-width: 1439px) {
                font-size: 16px;
                margin-bottom: 6px;
              }

              @media (min-width: 1440px) {
                font-size: 22px;
                margin-bottom: 10px;
              }
            }

            &:last-of-type {
              font-family: 'Montserrat', sans-serif;
              font-style: normal;
              font-weight: 400;
              line-height: 130.5%;
              letter-spacing: 0.005em;

              @media (max-width: 1439px) {
                font-size: 16px;
              }

              @media (min-width: 1440px) {
                font-size: 22px;
              }
            }
          }
        }
      }

      button {
        @media (max-width: 1439px) {
          background-color: #83F84C;
          box-shadow: 0 0 16px 1px #ACF08C;
          @include border-radius(15px);
          width: 240px;
          height: 55px;
          margin-top: 24px;

          a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            > img {
              width: 38px;
              height: 34px;
            }
          }
        }

        @media (min-width: 1440px) {
          display: none;
        }
      }
    }
  }
</style>