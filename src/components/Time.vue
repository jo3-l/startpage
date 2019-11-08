<template v-if="started">
  <div id="time-container">
    <h1 id="time">
      <span id="clock">{{ timeHours > 12 ? timeHours - 12 : timeHours }}:{{ timeMinutes }} {{ timeHours > 12 ? 'PM' : 'AM' }}</span>
      <br><span id="greeting" >{{ greeting }}, {{ name }}</span>
    </h1>
    <p id="date">{{ date }}</p>
  </div>
</template>

<script src="../js/Time.js">
</script>

<style scoped>
  #time {
    font-family: 'Roboto';
    width: 100%;
    text-align: center;
    position: absolute;
    color: white;
    text-shadow: 0.5px 0.5px 0.5px rgb(53, 52, 52);
    bottom: 50%;
  }
  #clock { font-size: 120px; }
  #greeting { font-size: 60px; }
  #date {
    position: absolute;
    bottom: 2px;
    right: 18px;
    font-family: 'Roboto';
    font-size: 18px;
    color: white;
    text-decoration: none;
    text-shadow: 0.5px 0.5px 0.5px rgb(53, 52, 52);
  }
</style>