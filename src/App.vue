<template>
  <div id="app">
    <van-tabbar v-model="active" active-color="red">
      <van-tabbar-item
        v-for="(item,index) in menus"
        :key="index"
        :name="item.name"
        :icon="item.icon"
        @click="goto(item)"
      >{{item.component}}</van-tabbar-item>
      <!-- <van-tabbar-item name="cinemas" icon="photo-o">影院</van-tabbar-item>
      <van-tabbar-item name="news" icon="comment-o">资讯</van-tabbar-item>
      <van-tabbar-item name="mine" icon="setting-o">我的</van-tabbar-item>-->
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      active: "movie",
      menus: [
        {
          name: "movie",
          path: "/movie",
          component: "电影",
          icon: "home-o"
        },
        {
          name: "cinemas",
          path: "/cinemas",
          component: "影院",
          icon: "photo-o"
        },
        {
          name: "news",
          path: "/news",
          component: "资讯",
          icon: "comment-o"
        },
        {
          icon: "manager-o",
          name: "mine",
          path: "/mine",
          component: "我的"
        }
      ]
    };
  },
  methods: {
    goto(item) {
      // window.console.log(this.$router, item);
      this.$router.push(item.path);
    }
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
