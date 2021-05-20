<template>
  <div class="form-container">
    <form>
      <div class="form-content">
        <div class="date-container">
          <label>Date</label>
          <input v-model="day.date" class="input-date" type="date" @change="store.methods.filterByMonth(day.date)" />
        </div>
        <div class="hour-container">
          <label>Nº of Hours</label>
          <input v-model="day.hours" class="input-hour" type="number" />
        </div>
      </div>
      <button
        @click.prevent="store.methods.submitDay(day.date, Number(day.hours))"
        class="submit-button"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
import { ref, inject } from "vue";

export default {
  setup() {
    const store = inject("store");

    let day = ref({
      
    });

    return {
      day,
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.form-content {
  width: 100%;
  display: block;
  font-size: 24px;
}
.date-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.hour-container {
  width: 100%;
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
}
.input-date {
  font-size: 18px;
}
.input-hour {
  font-size: 18px;
  width: 30%;
}
.submit-button {
  margin-top: 15px;
  font-size: 24px;
  border: 1px solid black;
  padding: 5px 20px;
  border-radius: 15px 0 7px 0px;
  background-color: white;
  transition: 0.2s;
}

.submit-button:hover {
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>
º