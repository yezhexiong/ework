<template>
  <div>
    <div style="text-align:center;padding-top:60px;">
      <img src="../../assets/logo.png" alt="" />
    </div>
    <van-form @submit="onSubmit">
      <div style="margin: 16px">
        <van-field
          v-model="formData.UserName"
          name="用户名"
          label="用户名"
          placeholder="admin"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="formData.Password"
          type="password"
          name="密码"
          label="密码"
          placeholder="123"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </div>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Form, Button, Field,Toast } from "vant";
export default {
  components: {
    [Form.name]: Form,
    [Button.name]: Button,
    [Field.name]: Field,
    [Toast.name]: Toast,
  },
  data() {
    return {
      formData:{
        UserName:'',
        Password:'',
      }
    };
  },

  methods: {
    onSubmit(values) {
      if (this.formData.UserName === "admin"&&this.formData.Password === "123") {
        this.$toast("登录成功");
        console.log("values:", values);
        this.$router.push("/");
      } else {
        this.$toast("用户名密码错误");
      }
    },
  },
};
</script>

<style lang="less">
</style>
