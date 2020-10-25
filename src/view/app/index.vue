<template>
  <van-grid :gutter="10">
  <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="app 名称" />
</van-grid>
</template>
<script>
import { Grid, GridItem } from 'vant';
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
  data() {
    return {
     
    };
  },
  methods: {
  }
};
</script>

<style lang="less">

</style>
