<template>
  <div>
    <van-nav-bar title="账号管理" left-text="返回" left-arrow @click-left="$router.push({path: `/home/setting`,})"/>
    <van-form @submit="onSubmit">
      <div style="margin: 16px">
        <van-field
          v-model="formData.UserName"
          name="用户名"
          label="用户名"
          placeholder="admin"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="formData.Sex" direction="horizontal">
              <van-radio name="0">保密</van-radio>
              <van-radio name="1">男</van-radio>
              <van-radio name="2">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="formData.Password"
          name="密码"
          label="密码"
          placeholder="123"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </div>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          确认修改
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Form, Button, Field,Toast,NavBar,Switch,Radio,RadioGroup } from "vant";
export default {
  components: {
    [Form.name]: Form,
    [Button.name]: Button,
    [Field.name]: Field,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,
    [Switch.name]: Switch,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
  },
  data() {
    return {
      formData:{
        UserName:'',
        Password:'',
        Sex:'1'
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
