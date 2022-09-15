class dailyActivities {
    constructor(){
        this.morningActivities = [],
        this.afternoonActivities = []
    }

    showActivities() {
    activitiesString = ``;
    counter = 0;
    for(element of this.morningActivities) {
    activitiesString = this.morningActivities[counter] /*Despues sigo*/
    }
    }
}

class activity {
    constructor(time,information,place,comment){
        this.time = time,
        this.information = information,
        this.place = place,
        this.comment = comment
    }
}

const monday = new dailyActivities();
const tuesday = new dailyActivities();
const wednesday = new dailyActivities();
const thursday = new dailyActivities();
const friday = new dailyActivities();
const saturday = new dailyActivities();
const sunday = new dailyActivities();

const addNewActivity = () => {
    let newActivity = [];
    let time = 0;
    let place = ``;
    let comment = ``;
    let daySelector = 0;
    let exit = ``;

    do {
        while(true) {
            time = prompt(Number(`Ingrese la hora del horario de su nueva actividad. `))

            if(time >= 0 && time <= 24) {
                break;
            }

                alert(`Debe ingresar un horario valido en numeros entre (0-24).`)

        }

    } while()


}
