<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in images" :key="item">
        <img :src="item" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- <van-tabs @click="fu()">
      <van-tab title="正在热映" ref="1">
        <router-view></router-view>
      </van-tab>
      <van-tab title="即将上映" @click="ji()">
        <router-view></router-view>
      </van-tab>
    </van-tabs>-->
    <ul class="nav-zi">
      <li v-for="item in sy" :key="item" @click="change()">
        <div>{{item}}</div>
        <p :class="active"></p>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "https://static.maizuo.com/v5/upload/8ed570440d40c8e76789a28d5f902b3d.jpg",
        "https://static.maizuo.com/v5/upload/47b094058a67ff20e88e643d8002c071.jpg",
        "https://static.maizuo.com/v5/upload/0cd4feda595fb5192abb457f20cd8d34.jpg",
        "https://static.maizuo.com/v5/upload/43314c67c190556bb64e464e57c1d5f9.jpg"
      ],
      sy: ["正在热映", "即将上映"],
      active: false
    };
  },
  methods: {
    change() {
      window.console.log(1);
      // this.active = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.van-swipe {
  img {
    width: 100%;
    height: 100%;
  }
}

.nav-zi {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  li {
    flex: 1;
    font-size: 14px;
    position: relative;
    span {
      color: #ff5f16;
    }
    p {
      position: absolute;
      margin: auto;
      top: 30px;
      left: 35%;
      width: 56px;
      border-bottom: 2px solid #ffffff;
      border-radius: 20px;
      display: block;
    }
    .active {
      border-bottom: 2px solid #ff5f16;
    }
  }
}
</style>