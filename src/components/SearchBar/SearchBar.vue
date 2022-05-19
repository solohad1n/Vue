<template>
  <div class="search-bar">
    <div class="search-bar__input">
      <input
        @input="handleChange"
        v-model="seacrhData"
        type="text"
        placeholder="Введите текст для поиска..."
      />
      <div class="search__icon">
        <img :src="seacrhIcon" />
      </div>
    </div>

    <div class="search-bar__results" :class="{ active: false }">
      <ul>
        <li class="active">
          Результаты поиска
          <img :src="seacrhIconBlack" alt="" />
        </li>
        <li>
          Результаты поиска
          <img :src="seacrhIconBlack" alt="" />
        </li>
        <li>
          Результаты поиска
          <img :src="seacrhIconBlack" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import seacrhIcon from "@/assets/img/seacrhIcon.svg";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const store = useStore();
    const seacrhData = ref("");

    const handleChange = () => {
      store.commit("SEARCH_ITEMS", seacrhData.value);
    };

    return {
      seacrhIcon,
      seacrhData,
      handleChange,
    };
  },
};
</script>

<style lang='scss'>
.search-bar {
  background: #f2f2f2;
  border-radius: 30px;
  padding: 5px 5px 5px 25px;
  width: 40%;
  position: relative;

  .search-bar__results {
    position: absolute;
    width: 100%;
    left: 0px;
    top: 65px;
    height: auto;
    display: none;
    background: #ffffff;
    box-shadow: 1px 10px 7px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    ul li {
      padding: 9px 20px 9px 25px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 10px;
      cursor: pointer;
      &.active {
        background: rgba(254, 95, 30, 0.05);
      }
    }
    &.active {
      display: block;
    }
  }

  .search-bar__input {
    display: flex;
    align-items: center;
  }
  .search__icon {
    padding: 12px;
    border-radius: 50%;
    background: #fe5f1e;
    width: 40px;
    height: 40px;
  }

  input {
    width: 100%;
    background: inherit;
    border: none;
    outline: none;
  }
}
</style>