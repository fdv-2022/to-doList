class dailyActivities {
    constructor(){
        this.morningActivities = [],
        this.afternoonActivities = []
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
}

const monday = new dailyActivities();
const tuesday = new dailyActivities();
const wednesday = new dailyActivities();
const thursday = new dailyActivities();
const friday = new dailyActivities();
const saturday = new dailyActivities();
const sunday = new dailyActivities();



const activityArraySelector = (object,name,hour,minutes,place,comment) => { /* */
    if ( hour < 12) {
        object.morningActivities.push(new activity(name,hour,minutes,place,comment));
        return;
    }
    object.afternoonActivities.push(new activity(name,hour,minutes,place,comment));
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
                activityArraySelector(monday,name,hour,minutes,place,comment);
                console.log(monday.morningActivities)
                console.log(monday.afternoonActivities)
                break;
            case `martes`:
                activityArraySelector(tuesday,name,hour,minutes,place,comment);
                console.log(tuesday.morningActivities)
                console.log(tuesday.afternoonActivities)
                break;
            case `miercoles`:
                activityArraySelector(wednesday,name,hour,minutes,place,comment);
                console.log(wednesday.morningActivities)
                console.log(wednesday.afternoonActivities)
                break;
            case `jueves`:
                activityArraySelector(thursday,name,hour,minutes,place,comment);
                console.log(thursday.morningActivities)
                console.log(thursday.afternoonActivities)
                break;
            case  `viernes`:
                activityArraySelector(friday,name,hour,minutes,place,comment);
                console.log(friday.morningActivities)
                console.log(friday.afternoonActivities)
                break;
            case `sabado`:
                activityArraySelector(saturday,name,hour,minutes,place,comment);
                console.log(saturday.morningActivities)
                console.log(saturday.afternoonActivities)
                break;
            case `domingo`:
                activityArraySelector(sunday,name,hour,minutes,place,comment);
                console.log(sunday.morningActivities)
                console.log(sunday.afternoonActivities)
                break;
        }

    } while(exit !== `SALIR`)
}

addNewActivity()