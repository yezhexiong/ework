<template>
  <div>
    <van-row type="flex" justify="center" align="center" style="height: 53px">
      <van-col span="5" offset="1">我的应用</van-col>
      <van-col span="18"></van-col>
    </van-row>
    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="app 名称"
      />
    </van-grid>
  </div>
</template>
<script>
import { Grid, GridItem } from "vant";
import { Col, Row } from "vant";
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Col.name]: Col,
    [Row.name]: Row,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
</style>
