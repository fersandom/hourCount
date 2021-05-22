<template>
  <div class="list-container">
    <ul class="list">
      <li class="list-item">
        <p>Date</p>
        <p>Hours</p>
        <p>Remove</p>
      </li>
      <li
        class="list-item"
        v-for="(item, index) in store.state.filteredMonth"
        :key="index"
      >
        <p>{{ item.myDate.toLocaleString("en-ES", {
          day: "numeric",
          month: "long",
          year: "numeric"
          }) }}</p>
        <p>{{ item.hours }}</p>

        <p class="remove-button" @click="store.methods.removeHours(store.state.days, index)">X</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const store = inject("store");
    return { store };
  },
  
};
</script>

<style>
.list-container {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.list {
  width: 40%;
  display: block;
  text-align: center;
}

.list-item{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 15px;
}

.remove-button{
  font-weight: bolder;
}

.remove-button:hover{
  cursor: pointer;
}
</style>