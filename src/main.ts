import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

//test new file ItemData
// import ItemData from "./model/ItemData";
// import Category from "./model/CateEnum";
// const item1 = new ItemData(1,Category.Study,"试试","验验货");
// console.log(item1);

//test new file ActionHelper
// import ActionHelper from "./store/ActionHelper";
// import ItemData from './model/ItemData';
// const ah = new ActionHelper();
// console.log(ah.memoList);
//测试新增
// const newItem=new ItemData(-1,Category.Life,"我喜欢你","吹牛不打草稿")
// newItem.id=ah.add(newItem)
// console.log(newItem);
//测试修改
// const newItem=new ItemData(2,Category.Life,"我喜欢你","吹牛我也会")
// ah.edit(newItem)
//测试删除
// ah.remove(2)
