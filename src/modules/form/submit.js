import dayjs  from "dayjs";

const selectedDate = document.getElementById('date')
const dateToday =  dayjs().format('YYYY-MM-DD');

selectedDate.value = dateToday
selectedDate.min = dateToday;