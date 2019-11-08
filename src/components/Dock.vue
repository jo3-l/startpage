<template>
<div>
  <ul id="dock">
    <DockItem  v-for="[name, item] in dock_items" v-bind:key="name" :link=item.url :img=item.icon>{{ name }}</DockItem>
  </ul>
</div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import DockItem from './DockItem';
  import { dock } from '../../config';
  export default {
    name: 'Dock',
    data() {
      return { dock_items: Object.entries(dock) };
    },
    components: {
      DockItem
    }
  };
</script>


<style scoped>
  #dock {
    list-style-type: none;
    margin: 0 auto;
    padding: 10px;
    background-color: rgba(31, 30, 30, 0.6); 
    position: absolute;
    width: auto;
    height: 127px;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 10%);
    border: 0.5px solid rgb(70, 69, 69);
    border-radius: 20px; 
  }
</style>
