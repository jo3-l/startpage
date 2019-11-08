<template>
    <li class="dock-item"><a :href="link"><img :src="img" height="90px" width="90px"></a></li>
</template>

<script>
  export default {
    name: 'DockItem',
    props: {
      link: String,
      img: String,
    }
  }
</script>

<style scoped>
  .dock-item {
    float: left;
  }

  .dock-item a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 14px;
    text-decoration: none;
  }

  .dock-item a:hover {
    border-radius: 10px;
    background-color: rgba(117, 114, 114, 0.3);
  }
</style>
