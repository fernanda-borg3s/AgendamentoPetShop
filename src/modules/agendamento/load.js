import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById('date');
export function diasAgendamento(){
    //obtem a data do input
    const date = selectedDate.value
    hoursLoad({ date }) //metodo que chama a funçao na hours-load.js/ paramentizado
}