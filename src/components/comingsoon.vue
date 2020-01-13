<template>
  <ul class="zheng-a">
    <li class="zheng-b">
      <div class="zheng-tu">
        <img
          src="https://pic.maizuo.com/usr/movie/c14daaf24fc50c767f5c067f2c05316b.jpg?x-oss-process=image/quality,Q_70"
          alt
        />
      </div>
      <ul class="zheng-jie">
        <li class="z-first">
          <span class="z-first-f">叶问4：完结篇</span>
          <span class="z-first-s">2D</span>
        </li>
        <li class="z-secend">
          <span class="label">观众评分</span>
          <span class="grade">7.2</span>
        </li>
        <li class="z-third">
          <span>主演：叶伟信 甄子丹 陈国坤 吴樾 斯科特·阿金斯</span>
        </li>
        <li class="z-fourth">
          <span>中国香港 | 0分钟</span>
        </li>
      </ul>
      <div class="buy-t">购票</div>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.zheng-a {
  margin-left: 15px;
  .zheng-b {
    padding: 15px 15px 15px 0;
    height: 94px;
    position: relative;
    .zheng-tu {
      width: 66px;
      height: 94px;
      background: rgb(249, 249, 249);
      float: left;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .zheng-jie {
      float: left;
      padding: 0 10px;
      width: calc(100% - 136px);
      position: relative;
      .z-first {
        .z-first-f {
          max-width: calc(100% - 25px);
          color: #191a1b;
          font-size: 16px;
          height: 22px;
          line-height: 22px;
          margin-right: 5px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .z-first-s {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
        }
      }
      .z-secend {
        .label {
          font-size: 13px;
          margin-top: 4px;
          color: #797d82;
        }
        .grade {
          color: #ffb232;
          font-size: 14px;
        }
      }
      .z-third {
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        span {
          font-size: 13px;
          margin-top: 4px;
          color: #797d82;
        }
      }
      .z-fourth {
        span {
          font-size: 13px;
          margin-top: 4px;
          color: #797d82;
        }
      }
    }
    .buy-t {
      float: right;
      color: #ff5f16;
      border: 1px solid #ff5f16;
      font-size: 13px;
      width: 50px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
    }
  }
}
</style>