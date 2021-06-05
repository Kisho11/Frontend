export class Seeding {

    id : any;
    seedingsoil : any;
    seedingattack : any;
    landscape : any;
    seedingwater : any;
    seedingtemp : any;
    seedingpestAttackSymptoms : any;
    seedingcontrolsystemchemical : any;
    seedingcontrolsystemnonchemical : any;
   
    constructor(id : any, seedingsoil : any, seedingattack : any, landscape : any,
        seedingwater : any, seedingtemp : any, seedingpestattacksymptoms : any
        , seedingcontrolsystemchemical : any, seedingcontrolsystemnonchemical : any){


            this.id = id;
            this.seedingsoil = seedingsoil;
            this.seedingattack = seedingattack;
            this.landscape = landscape;
            this.seedingwater = seedingwater;
            this.seedingtemp = seedingtemp;
            this.seedingpestAttackSymptoms = seedingpestattacksymptoms;
            this.seedingcontrolsystemchemical = seedingcontrolsystemchemical;
            this.seedingcontrolsystemnonchemical = seedingcontrolsystemnonchemical;

    }

}
