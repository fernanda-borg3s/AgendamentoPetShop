import dayjs from "dayjs";
import { hoursOpen } from "../../utilitarios/hoursOpen.js";  

export function hoursLoad({ date }){
    const opening = hoursOpen.map((hour) => {
        // console.log(hour);

        const [scheduleHour] = hour.split(":")
        //add hora na date para verificar se ta no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());
        // console.log(scheduleHour, isHourPast)

        //verifica se a hora ja foi agendada
        return{
            hour,
            available:isHourPast,
        }
    })

    // const hours = document.querySelector("hours")
    // //rederia os horarios
    // opening.forEach(({ hour, available }) => {
    // const li = document.createElement("li")
    // li.classList.add("hour")
    // li.classList.add(available ? "hour-available": "hour-unavailable") //a classe dos elementos
    // li.textContent = hour
    // hours.append(li)
    // })
}

