export interface IContact {
    name: string;
    lastMessage: string;
    date?: any;
    photo?: any;
  }
  
  export class Contact implements IContact {
    constructor(
      public name: string,
      public lastMessage: string,
      public date: any,
      public photo: any,
    ) { }
  }


  
  export const arrContacts: IContact[] = [

    {
        name: 'Alice Freeman',
        lastMessage: 'Hello',
        // date: this.date,
        photo: '../assets/images/medium-Alice-Freeman-SportsBusinessSolutions.jpg'
      },
      {
        name: 'Josefina',
        lastMessage: 'Hello',
        // date: this.date,
        photo: '../assets/images/MV5BZjcyMWEzMzAtY2RjMy00NTlhLWFlYzgtZWRlODk5NmY1OTQxXkEyXkFqcGdeQXVyMzQxNTk0ODg@._V1_.jpg'
      },
      {
        name: 'Valazquez',
        lastMessage: 'Hello',
        // date: this.date,
        photo: '../assets/images/Velázquez_Celso.1205884756.jpg'
      },
      {
        name: 'Barrera',
        lastMessage: 'Hello',
        // date: this.date,
        photo: '../assets/images/ава 1.png'
      },
      {
        name: 'Bruce Willis',
        lastMessage: 'Hello',
        // date: this.date,
        photo: '../assets/images/image-w856.jpg'
      },
      {
        name: 'Jakie Chan',
        lastMessage: 'Hello',
        // date: this.date,
        photo: '../assets/images/chan_a.jpg'
      },
      {
        name: 'Sylvester Stallone',
        lastMessage: 'Hello',
        // date: this.date,
        photo: '../assets/images/Sylvester-Stallone-Workout-and-Diet-1.jpg'
      },
      {
        name: 'Conor McGregor',
        lastMessage: 'Hello',
        // date: this.date,
        photo: '../assets/images/3126.jpg'
      },




  ]