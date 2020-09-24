<template>
  <div class="top-panel">
    <div class="top-panel__box">
      <div class="top-panel__column top-panel__linklist">
        <ul class="linklist">
          <li v-for="link in topLincs" :key="link.id" class="linklist-item">
            <a :href="link.path" class="linklist-item__url">
              <div class="linklist-item__text">{{ link.title }}</div>
            </a>
          </li>
        </ul>
      </div>
      <div class="top-panel__column top-panel__rates">
        <rates />
      </div>
    </div>
  </div>
</template>

<script>
import rates from '@/components/header/Rates'

export default {
  components: {
    rates
  },
  props: {
    topLincs: {
      type: Array,
      default () {
        return []
      }
    },
    mainMenu: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  mounted () {
  }
  // methods: {
  //   async getCourse () {
  //     await this.$axios.$get('https://iz.ru/api/0/tag/rossiia')
  //   }
  // },
  // mounted () {
  //   this.getCourse().then(function (...arg) {
  //     console.log(...arg)
  //   })
  //   // setInterval(() => {
  //   // }, 5000);
  // }
}
</script>

<style lang="scss">
// ??? они же подключены глобально О_о
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";

.top-panel {
  background: #2c2c2c;
  color: #989898;
  overflow: auto;
  padding: 0px 0 0px 0;
  border-top: 1px solid #555555;
  overflow: hidden;
  height: 30px;
  .top-panel__box {
    display: flex;
    flex-wrap: nowrap;
    padding: $DectopPd;
    @media screen and (max-width: $smDesktopWidth) {
      padding: $smDesktopPd;
    }
    @media screen and (max-width: $tableWidth) {
      padding: $tablePd;
    }
    @media screen and (max-width: $phoneWidth) {
      padding: $phonePd;
    }
    //linklist
    .top-panel__linklist {
      width: 100%;
      .linklist {
        display: flex;
        align-items: center;
        height: 30px;
        list-style: none;
        flex-wrap: wrap;
        .linklist-item {
          font-weight: bold;
          margin-right: 15px;
          height: 30px;
          display: flex;
          align-items: center;
          a {
            font-size: 14px;
            font-weight: 700;
            color: $urlDefault;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            @include transition-all;
          }
          a:hover {
            color: $urlHover;
          }
        }
      }
    }

    // rates
    .top-panel__rates {
      width: 230px;
      text-align: right;
      height: 30px;
      .rates {
        margin-left: 10px;
        display: grid;
        height: 30px;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
        .rates__box {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          .rates-icon__box {
            color: #696969;
            background: #d4cb92;
            border-radius: 100px;
            width: 24px;
            height: 24px;
            text-align: center;
            display: grid;
            align-items: center;
          }
          .rates-arrow {
            margin: 0px 5px;
            width: 6px;
            height: 12px;
          }
          .rates-value {
            color: #fff;
            font-size: 14px;
          }
        }
      }
    }
  }
  @media screen and (max-width: $tableWidth) {
    display: none;
  }
}
</style>
