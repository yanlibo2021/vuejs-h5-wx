<template>
  <div class="home">
    <!-- <h1>h5</h1> -->
    <van-button type="info" @click="getHomeData">h5 小程序 template 2021</van-button>
    <!-- <span>{{permission.routes}}</span> -->
    <div class="title">mobile</div>
    <br />
    <div v-for="(item,index) in list" :key="index">{{item.name}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import { getMenu } from "@/api/index";

export default {
  components: {},
  data() {
    return {
      list: []
    };
  },
  mounted() {
    //console.log(this.getHomeData());
  },
  computed: {
    ...mapState(["permission"])
  },
  methods: {
    ...mapActions(["getMenuData"]),
    getHomeData() {
      getMenu().then(res => {
        console.log("res", res);
        if (res.data.code == 20000) {
          alert("success!!!");
          //Toast.success("成功文案");
          this.list = res.data.data;
        }
      });

      //this.getMenuData("Action");
      this.$store.dispatch("permission/getMenuData", "action");
    },
    onBookMoreClick() {
      console.log("book click");
    },
    onHomeBookClick() {
      console.log("more click");
    },
    // 搜索跳转页
    onSearchBarkClick() {},
    onBannerClick() {}
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 300px;
  // height: 20rem;
  background: red;

  .title {
    font-size: 14px;
  }
}
</style>
