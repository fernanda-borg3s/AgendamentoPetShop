import dayjs  from "dayjs";

const form = document.querySelector("form");
const tutorName = document.getElementById("tutor");
const petName = document.getElementById("pet");
const telefone = document.getElementById("telefone");
const descricaoServico = document.getElementById("descricao");
const horario = document.getElementById("time").value;
const selectedDate = document.getElementById('date')
const selectedDateAgendado = document.getElementById('date-agendado');
const dateToday =  dayjs().format('YYYY-MM-DD');

selectedDate.value = dateToday
selectedDateAgendado.value = dateToday
selectedDate.min = dateToday;
const placeToAlert = document.getElementById("placeToAlert")
form.onsubmit = (e) =>{
    e.preventDefault()



    try {
        //trim tira espaços
        const name = tutorName.valur.trim()
        const [hour] = horario.innerText.split(":")

        const whenAgendamento = dayjs(selectedDate.value).add(hour, "hour")

        //O QUE TEM SER FEITO
            // gerar um id aleatorio
            //campos, nome, data, telefone, horario, descriçao para APi
       
    } catch (error) {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>Ops! Algo deu errado. Tente novamente mais tarde!</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
        ].join('')

        placeToAlert.append(wrapper)
            
    }
}