<template>
  <div id="memos" class="container">
    <MemoItem v-for="item in filterName()" :key="item.id" :memo="item" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ItemData from "../model/ItemData";
import MemoItem from "./MemoItem.vue";

@Component({
  components: {
    MemoItem
  }
})
export default class ItemList extends Vue {
  memoArr: Array<ItemData> = this.$store.state.aHelper.memoList;
  constructor() {
    super();
  }

  filterName() {
    if (this.$store.state.filterCateId == -1) {
      return this.memoArr;
    } else {
      return this.memoArr.filter((item: any) => {
        return item.categoryId == this.$store.state.filterCateId;
      });
    }
  }
}
</script>
