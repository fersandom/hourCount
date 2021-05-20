<template>
  <div class="total-container">
    <div class="hour-container">
      <h3>Total Hours:</h3>
      <h3>{{ store.hourCounter.value }}</h3>
    </div>
    <div class="money-container">
      <h3>Total cash:</h3>
      <h3>{{ store.totalMoney.value }} kn</h3>
    </div>
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
.total-container {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 40px;
}

</style>