<template>
  <div id="main">
    <mavon-editor v-model="value"/>
  </div>
</template>

<script>
// import guideAboutVueMd from "../../assets/md/test.md";
export default {
  data() {
    return {
      value: ''
      // value: guideAboutVueMd
    };
  },
  mounted() {
    console.log(this.value);
  }
};
</script>

<style>
</style>
