<template>
  <div>
    <van-nav-bar title="高级搜索" left-text="返回" left-arrow @click-left="$router.push({path: `/home/message`,})"/>
    <van-form @submit="onSubmit">
      <van-field
        v-model="formData.SearchKey"
        label="关键词"
        placeholder="请输入关键词"
      />
      <van-field name="switch" label="本人发起">
        <template #input>
          <van-switch v-model="formData.IsSelf" size="20" />
        </template>
      </van-field>
      <van-field name="switch" label="过滤已读">
        <template #input>
          <van-switch v-model="formData.IsRead" size="20" />
        </template>
      </van-field>
      <van-field
        readonly
        clickable
        label="工作组"
        :value="formData.GroupId"
        placeholder="选择工作组"
        @click="showGroupPicker = true"
      />
      <van-popup v-model="showGroupPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="groupColumns"
        @cancel="showGroupPicker = false"
        @confirm="onConfirmGroup"
      />
      </van-popup>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          确认搜索
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Form, Button, Field,Toast,Switch,Popup,Picker,NavBar  } from "vant";
export default {
  components: {
    [Form.name]: Form,
    [Button.name]: Button,
    [Field.name]: Field,
    [Toast.name]: Toast,
    [Switch.name]: Switch,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [NavBar.name]: NavBar,
  },
  data() {
    return {
      formData:{
        UserName:'',
        Password:'',
        GroupId:'',
      },
      showGroupPicker: false,
      groupColumns: ['工作组A', '工作组B', '工作组C', '工作组A', '工作组A', '工作组A', '工作组A', '工作组A'],
    };
  },

  methods: {
    onSubmit() {
      
    },
    onConfirmGroup(value) {
      this.formData.GroupId = value;
      this.showGroupPicker = false;
    },
  },
};
</script>

<style lang="less">
</style>
