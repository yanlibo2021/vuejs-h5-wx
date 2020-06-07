
<template>
  <div>
    <van-tabbar
      :active="active1"
      :fixed="isfixed"
      @change="onChange1"
      :active-color="activecolor"
      :safe-area-inset-bottom="true"
    >
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :info="item.num?item.num:''">
        <image slot="icon" :src="item.normal" mode="aspectFit" class="img" />
        <image slot="icon-active" :src="item.active" mode="aspectFit" class="img" />
        {{item.text}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {
      activecolor: "rgb(117, 163, 66)",
      isfixed: true,
      active1: 0,
      tabbars: [
        {
          name: "home",
          title: "home.home",
          normal: "/static/images/tabbar/home_default.png",
          active: "/static/images/tabbar/home_selected.png",
          text: "首页"
        },
        {
          name: "category",
          title: "home.category",
          normal: "/static/images/tabbar/category_default.png",
          active: "/static/images/tabbar/category_selected.png",
          text: "分类"
        },
        {
          name: "eat",
          title: "home.eat",
          normal: "/static/images/tabbar/eat_default.png",
          active: "/static/images/tabbar/eat_selected.png",
          text: "吃什么"
        },
        {
          name: "cart",
          title: "home.cart",
          normal: "/static/images/tabbar/shoppingcart_default.png",
          active: "/static/images/tabbar/shoppingcart_selected.png",
          num: 1,
          text: "购物车"
        },
        {
          name: "mine",
          title: "home.mine",
          normal: "/static/images/tabbar/mine_default.png",
          active: "/static/images/tabbar/mine_selected.png",
          text: "我的"
        }
      ]
    };
  },
  methods: {
    onChange1(event) {
      //最好手动赋值一下,要不值不是最新的
      this.active1 = event.mp.detail;
    }
  }
};
</script>

<style  lang="less" scoped>
.img {
  height: 18px;
  width: 18px;
}
</style>