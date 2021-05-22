//Creando la tienda sin necesidad de Vuex

import { ref, reactive } from "vue";

//Crea el objeto state en el que pasamos los datos que serán tratados
//Se hace reactivo para que pueda ser escuchado por el resto de los componentes
const state = reactive({
  days: [],
  filteredMonth: [],
  selectedMonth: Number,
});

//Por ref
const hourCounter = ref(0);
const totalMoney = ref(0);

const methods = {
  loadCookie() {
    const loadArray = JSON.parse(localStorage.getItem("hours"));
    loadArray.forEach((element) => {
      element.myDate.toString();
      element.myDate = new Date(element.myDate);
    });
    console.log(loadArray);
    state.days = [...loadArray];
  },

  saveCookie() {
    localStorage.setItem("hours", JSON.stringify(state.days));
  },

  submitDay(date, hours) {
    //Parte la fecha para devolverla como objeto
    const parts = date.split("-");
    const myDate = new Date(parts[0], parts[1] - 1, parts[2]);
    //Crea el objeto que se almacenará en newDay
    let newDay = {
      myDate,
      hours,
    };
    state.days.push(newDay);
    this.filterByMonth(date);
    console.log(state.days);
  },

  filterByMonth(date) {
    //De nuevo toma la fecha y la divide en un objeto
    const parts = date.split("-");
    let dividedDate = new Date(parts[0], parts[1] - 1, parts[2]);
    let monthDate = dividedDate.getMonth();

    //Crea un nuevo vector con los días filtrados por mes
    state.filteredMonth = state.days.filter(function(date) {
      return date.myDate.getMonth() === monthDate;
    });

    this.totalHours(state.filteredMonth);
    console.log(state.filteredMonth);
    this.saveCookie();
  },

  totalHours(array) {
    hourCounter.value = 0;
    array.forEach((element) => {
      hourCounter.value += element.hours;
    });
    totalMoney.value = hourCounter.value * 60;
    console.log(hourCounter.value);
  },

  removeHours(array, index) {
    state.filteredMonth = array.splice(index, 1);
    this.totalHours(state.filteredMonth);

    this.saveCookie();
    console.log(state.days);
  },
};

//Exporta los elementos que serán usados por otros componentes.
export default {
  state,
  hourCounter,
  totalMoney,
  methods,
};
