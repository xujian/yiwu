<template>
  <div class="layout-default">
    <pa-header></pa-header>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import PaHeader from '@/components/ui/header'

export default {
  name: 'default-layout',
  components: {
    PaHeader
  }
}
</script>
<style lang="stylus">

</style>
