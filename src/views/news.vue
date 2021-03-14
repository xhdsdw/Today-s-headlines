<template>
  <div id="page">
    <div class="header-top">
      <div class="title">
        <a href="#" class="logo"></a><a href="#" class="refresh"></a>
      </div>
      <div class="message">
        <a href="javascript:;" class="message_btn"></a>
      </div>
      <div class="search">
        <a href="#" class="search_btn"></a>
      </div>
    </div>
    <div class="header-button">
      <div class="nav">
        <a
          href="#"
          :class="{ changeColor }"
          @click="
            changeColor = !changeColor;
            back();
          "
        >
          <span>推荐</span></a
        >
        <a href="#" @click="changeColor = !changeColor" :class="{ changeColor }"
          ><span>视频</span></a
        >
        <a href="#" @click="changeColor = !changeColor" :class="{ changeColor }"
          ><span>热点</span></a
        >
        <a href="#" @click="changeColor = !changeColor" :class="{ changeColor }"
          ><span>社会</span></a
        >
        <a href="#" @click="changeColor = !changeColor" :class="{ changeColor }"
          ><span>娱乐</span></a
        >
        <a href="#" @click="changeColor = !changeColor" :class="{ changeColor }"
          ><span>军事</span></a
        >
      </div>
      <div class="add"></div>
    </div>
    <div class="ad-a">
      <div class="ad">
        <div class="logo"></div>
        <div class="text">今日头条</div>
        <div class="open">打开</div>
      </div>
    </div>
    <div class="news">
      <h1>我是视频</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      changeColor: false,
    };
  },
  methods: {
    got: function () {
      this.$router.push("/news");
    },
    back: function () {
      this.$router.push("/");
    },
  },
};
</script>
<style >
* {
  margin: 0;
  padding: 0;
}

#page {
  width: 375px;
  margin: 0 auto;
}

/* 下方广告 */
.ad-a {
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 1;
}
.ad {
  width: 100%;
  height: 50px;
}
.ad .logo {
  position: relative;
  float: left;
  width: 30px;
  height: 30px;
  margin-left: 15px;
  background: url("../assets/img/banner_logo.png") no-repeat;
  background-size: 30px;
  top: 50%;
  margin-top: -15px;
}
.ad .text {
  font-size: 14px;
  float: left;
  margin-left: 10px;
  line-height: 50px;
}
.ad .open {
  position: relative;
  color: #fff;
  float: left;
  width: 75px;
  font-size: 16px;
  line-height: 30px;
  height: 30px;
  background: #ff0f0f;
  text-align: center;
  top: 50%;
  margin-top: -15px;
  border-radius: 15px;
  margin-left: 175px;
}

/* 头部上方 */
.header-top {
  position: fixed;
  width: 375px;
  height: 44px;
  background: #d43d3d;
  z-index: 5;
  top: 0;
}

.title {
  position: absolute;
  width: 120px;
  height: 44px;
  float: left;
  padding-left: 140px;
  line-height: 44px;
  margin: 0 auto;
}
.header-top .title .logo {
  display: inline-block;
  width: 83px;
  height: 44px;
  background: url("../assets/img/logo.png") no-repeat 100%;
  background-size: 83px;
  padding-left: -15px;
}
.header-top .title .refresh {
  display: inline-block;
  width: 15px;
  height: 44px;
  margin-left: 5px;
  background: url("../assets/img/refresh.png") no-repeat 100%;
  background-size: 15px;
}

.header-top .message {
  position: absolute;
  float: left;
}

.header-top .message .message_btn {
  width: 25px;
  height: 44px;
  margin-left: 25px;
  display: inline-block;
  background: url("../assets/img/message.png") no-repeat 100%;
  background-size: 25px;
}
.header-top .search {
  height: 44px;
  position: absolute;
  float: left;
}
.header-top .search .search_btn {
  width: 25px;
  height: 44px;
  margin-left: 330px;
  display: inline-block;
  background: url("../assets/img/search.png") no-repeat 100%;
  background-size: 24px;
}

/* 头部下方 */
.header-button {
  position: fixed;
  width: 375px;
  height: 37px;
  background: #f4f5f6;
  top: 44px;
  z-index: 1;
  overflow: hidden;
}

/* .header-button .nav {
  line-height: 37px;
  list-style-type: none;
}
.header-button .nav > li {
  white-space: nowrap;
  float: left;
  margin-left: 25px;
} */
.header-button .nav {
  width: 335px;
  line-height: 37px;
  overflow-x: auto;
}
.header-button .nav > a {
  float: left;
  color: #6a6a6a;
  display: block;
  text-decoration: none;
  margin-left: 26px;
  font-size: 16px;
}
.header-button .nav > a:hover {
  color: #d43d3d;
}
.header-button .add {
  position: fixed;
  top: 44px;
  margin-left: 331px;
  width: 44px;
  height: 37px;
  float: left;
  line-height: 37px;
  background: url("../assets/img/add.png") no-repeat 50%;
  background-size: 20px;
}
.changeColor {
  color: red;
}
.news {
  position: absolute;
  width: 375px;
  top: 81px;
  margin: 0px 15px;
  margin: 0 auto;
}
</style>