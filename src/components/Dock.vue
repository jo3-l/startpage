<template>
<div>
  <ul id="dock" v-if="not_hidden">
    <DockItem v-for="[name, item] in dock_items" v-bind:key="name" :link=item.url :img=item.icon>{{ name }}</DockItem>
  </ul>
</div>
</template>

<script src="../js/Dock.js">
</script>

<style scoped>
  #dock {
    list-style-type: none;
    margin: 0 auto;
    padding: 10px;
    background-color: rgba(31, 30, 30, 0.6); 
    position: absolute;
    height: 127px;
    width: auto;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 10%);
    border: 0.5px solid rgb(70, 69, 69);
    border-radius: 20px;
  }
</style>