<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label"></span>
        <div class="g-form-input">
          <input type="text"
           placeholder="请输入用户名">
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" >登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
