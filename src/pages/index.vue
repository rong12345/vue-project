<template >
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="pro in productList">
          <h3>{{ pro.title }}</h3>
          <ul>
            <li v-for="item in pro.list">
              <a :href="item.url">{{item.title}}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div class="hr" v-if="!pro.last"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <template >
          <h2>最新消息</h2>
          <ul>
            <li v-for='item in newsList'>
              <a :href="item.url" class="new-item">{{item.title}}</a>
            </li>
          </ul>
          <!-- <div class="hr" v-if="!pro.last"></div> -->
        </template>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :inv="invTime"
      @onchange="doSomethingOnSlideChange"></slide-show>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item,index) in boardList"
        :class="[{'line-last' : index % 2 !== 0},'index-board-' + item.id]">
          <div class="index-board-item-inner" >
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
              <div class="index-board-button">
                <!-- <router-link></router-link> -->
                <button type="button" name="button">立即购买</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Vue from 'vue'
  import slideShow from '../components/slideShow'
  export default{
    components:{slideShow},
    // created:function(){
    //   // Vue.http.options.emulateJSON = true;
    //   this.$http.post('api/getNewsList')
    //   .then(function (data) {
    //     console.log(data);
    //   },function(err){
    //     console.log(err);
    //   })
    // },
    created () {
      // let me = this.newsList
     this.$http.post('http://localhost:8080/api/getNewsList')
     .then((res) => {
       this.newsList = res.data.data
       console.log(this.newsList);
     },(err) => {
         console.log(err);
       })
    },
    methods:{
      doSomethingOnSlideChange(){
        console.log('doSomethingOnSlideChange');
      }
    },
    data(){
      return{
        invTime: 2000,
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'title1',
            href: 'detail/count'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: 'title2',
            href: 'detail/forecast'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: 'title3',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: 'title4',
            href: 'detail/publish'
          }
        ],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            // toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            // toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            // toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            // toKey: 'publish',
            saleout: false
          }
        ],
        newsList:[],
        productList:{
          pc:{
            'title':'PC产品',
            list:[
              {
                title:'数据统计',
                url:'detail/count'
              },
              {
                title:'数据预测',
                url:'detail/forecast'
              },
              {
                title:'流量分析',
                url:'detail/analysis',
                hot:true
              },
              {
                title:'广告发布',
                url:'detail/publish'
              }
            ]
          },
          app:{
            'title':'手机应用类',
            last:true,
            list:[
              {
                title:'91助手',
                url:''
              },
              {
                title:'产品助手',
                url:''
              },
              {
                title:'智能地图',
                url:'',
                hot:true
              },
              {
                title:'团队语音',
                url:''
              }
            ]
          }
        }
      }
    }



  }
</script>
<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
  list-style: none;
  border-bottom: 1px #ccc solid;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
button {
  background-color: #4fc08d;
  border: 0;
  color:#fff;
  width: 100px;
  height: 30px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
