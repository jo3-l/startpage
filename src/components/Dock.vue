<template>
<div>
  <ul id="dock">
    <DockItem link="https://gmail.com" img="https://image.flaticon.com/icons/png/512/281/281769.png"></DockItem>
    <DockItem link="https://discordapp.com" img="https://icon-library.net/images/discord-transparent-server-icon/discord-transparent-server-icon-3.jpg"></DockItem>
    <DockItem link="https://reddit.com" img="https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-36-512.png"></DockItem>
    <DockItem link="https://github.com" img="https://cdn3.iconfinder.com/data/icons/social-media-circle/512/circle-github-512.png"></DockItem>
    <DockItem link="https://hangouts.google.com" img="https://image.flaticon.com/icons/png/512/300/300227.png"></DockItem>
  </ul>
</div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import DockItem from './DockItem';
  export default {
    name: 'Dock',
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
