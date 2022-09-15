class dailyActivities {
    constructor(name){
        this.morningActivities = [],
        this.afternoonActivities = []
        this.name = name;
    }

   /* showActivities() {
    activitiesString = ``;
    counter = 0;
    for(element of this.morningActivities) {
         activitiesString = this.morningActivities[counter]
        }
    }*/

}

class activity {
    constructor(name,hour,minutes,place,comment){
        this.name = name;
        this.hour = hour,
        this.minutes = minutes,
        this.place = place,
        this.comment = comment
    }

    showTime(){
        return (`${this.hour}:${this.minutes}`)
    }

    timeToFilter(){
        return parseInt(`${this.hour}${this.minutes}`)
    }

}

/*const monday = new dailyActivities();
const tuesday = new dailyActivities();
const wednesday = new dailyActivities();
const thursday = new dailyActivities();
const friday = new dailyActivities();
const saturday = new dailyActivities();
const sunday = new dailyActivities();*/

/* ES MEJOR USAR UN ARRAY : dias */
let dias = [];
dias.push(new dailyActivities(`LUNES`));
dias.push(new dailyActivities(`MARTES`));
dias.push(new dailyActivities(`MIERCOLES`));
dias.push(new dailyActivities(`JUEVES`));
dias.push(new dailyActivities(`VIERNES`));
dias.push(new dailyActivities(`SABADO`));
dias.push(new dailyActivities(`DOMINGO`));

const activityArraySelector = (object,name,hour,minutes,place,comment) => { /* */
    if ( hour < 12) {
        object.morningActivities.push(new activity(name,hour,minutes,place,comment));
        return;
    }
    object.afternoonActivities.push(new activity(name,hour,minutes,place,comment));
}

const showSchedule = () => {
    let scheduleString = `LUNES :\n`;
    let counter = 0;

    scheduleString += `MANANA:\n`
    for (element of monday.morningActivities) {
        scheduleString += `HORA: ${element.showTime()}  ACTIVIDAD: ${element[counter].name} `

        if (element.place !== ``){
            scheduleString += `LUGAR: ${element.place}  `
        }

        if (element.comment !== ``){
            scheduleString += `COMENTARIO: ${element.comment} `
        }

        scheduleString +=  `\n`
    }

    scheduleString +=  `\n \n`

    scheduleString +=  `TARDE`


    return alert (scheduleString)
}

const timeFilter = () => {
    dias[0].afternoonActivities.sort( (a,b) => {
        if(a.timeToFilter() < b.timeToFilter()) {
            return 1;
        }

        if(a.timeToFilter() > b.timeToFilter()){
            return -1;
        }

        return 0;
    })
}

const addNewActivity = () => { /* */
    let hour = 0;
    let minutes = 0;
    let place = ``;
    let comment = ``;
    let exit = ``;
    let day = ``;
    let name = ``;

    do{
        exit = parseInt(prompt(`Desea agregar una nueva actividad a su lista semanal? \n1- SI \n2-NO`));

        if (exit !== 1 && exit !== 2){
            alert(`Recuerde que debe ingresar un numero entre 1 y 2`);
            continue;
        }

        if (exit === 2){
            break;
        }

        while (true) {
            day = prompt(`Ingrese el dia de la semana que va a realizar su actividad.`).toLowerCase();

            if(day === `lunes` || day === `martes` || day === `miercoles` || day === `jueves` || day === `viernes` || day === `sabado` || day === `domingo`){
                break;
            }
            alert(`Debe ingresar un dia valido (lunes-martes-miercoles-viernes-sabado-domingo)`);
        }

        while(true){
            hour = parseInt(prompt(`Ingrese la HORA del horario de su nueva actividad. Formato : HH`));

            if( hour>= 0 && hour <= 24){
                break;
            }

            alert(`Debe ingresar un horario valido en numeros entre 0-24`)
        }

        while(true){
            minutes = parseInt(prompt(`Ingrese los MINUTOS del horario de su nueva actividad. Formato : MM`));

            if(minutes>= 0 && minutes <= 59) {
                break;
            }

            alert(`Debe ingresar un horario valido en numeros entre 0-59`)
        }

        while (true) {
            name = prompt(`Ingrese un titulo para su recordatorio. (Maximo 15 caracteres)`)

            if(name !== `` && name.length < 15){
                break;
            }

            alert(`Su titulo ingresado no cumple con los requerimientos establecidos.`)
        }

        place = prompt(`Ingrese el lugar donde debe concurrir para cumplir con su actividad. (opcional)`)
        comment = prompt(`Ingrese un comentario adicional que desee mostrar en su itinerario semanal. (opcional.)`)

        switch(day) {
            case `lunes`:
                activityArraySelector(dias[0],name,hour,minutes,place,comment);
                break;
            case `martes`:
                activityArraySelector(dias[1],name,hour,minutes,place,comment);
                break;
            case `miercoles`:
                activityArraySelector(dias[2],name,hour,minutes,place,comment);
                break;
            case `jueves`:
                activityArraySelector(dias[3],name,hour,minutes,place,comment);
                break;
            case  `viernes`:
                activityArraySelector(dias[4],name,hour,minutes,place,comment);
                break;
            case `sabado`:
                activityArraySelector(dias[5],name,hour,minutes,place,comment);
                break;
            case `domingo`:
                activityArraySelector(dias[6],name,hour,minutes,place,comment);
                break;
        }

    } while(exit !== `SALIR`)

    timeFilter()
}

addNewActivity()