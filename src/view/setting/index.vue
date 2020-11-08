<template>
  <div>
    <van-row type="flex" justify="center" align="center" style="height: 37px">
      <van-col span="5" offset="1">管理配置</van-col>
      <van-col span="18"></van-col>
    </van-row>
    <van-cell-group>
      <van-cell title="工作组管理" is-link />
      <van-cell title="工作组成员管理" is-link icon="user-circle-o"/>
      <van-cell title="组织机构管理" is-link />
      <van-cell title="组织机构成员管理" is-link icon="user-circle-o"/>
      <!-- <van-cell title="文档管理" is-link icon="orders-o" />
      <van-cell title="通讯录管理" is-link icon="friends-o" />
      <van-cell title="用户管理" is-link icon="location-o" /> -->
      <van-cell title="账号管理" is-link icon="user-circle-o"  @click="$router.push({path: `/userEdit`,})"/>
      <van-cell title="退出" is-link @click="$router.push({path: `/login`,})" />
    </van-cell-group>
  </div>
</template>
<script>
import { Cell, CellGroup } from "vant";
import { Col, Row } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
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
