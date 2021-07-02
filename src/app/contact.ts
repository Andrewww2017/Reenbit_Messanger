
export const contacts: Contact[] = [
    {
        id: 0,
        image: 'https://sportsbusiness-solutions.s3.amazonaws.com/contact/11257/medium-Alice-Freeman-SportsBusinessSolutions.jpg?v=1595026803',
        userName: 'Alice Freeman',
        messages: [{ message: 'Hello', creationDate: 1604628443606, isOwnMes: true },
        { message: "EVERY DAY I'M SHUFFLIN'... - CHUCK NORRIS", creationDate: 1604678131748, isOwnMes: false }]
    },

    {
        id: 1,
        image: 'https://www.film.ru/sites/default/files/people/_tmdb/xIiHcfGBXXJcrxTAJbbefX0COWd.jpg',
        userName: 'Josefina',
        messages: [{ message: 'How are you?', creationDate: 1604678443606, isOwnMes: true },
        { message: 'if you have five dollars and Chuck Norris has five dollars, Chuck Norris has more money than you.', creationDate: 1604678131748, isOwnMes: false }]
    },
    {
        id: 2,
        image: 'https://chemistry.ucdavis.edu/sites/g/files/dgvnsk196/files/styles/sf_profile/public/images/person/Velazquez-Jesus.jpg?h=16952033&itok=ZkhgJERr',
        userName: 'Valazquez',
        messages: [{ message: 'Tell me some joke)', creationDate: 1604678443606, isOwnMes: true },
        { message: 'Chuck Norris gives cigarettes cancer', creationDate: 1604678131748, isOwnMes: false }]
    },
    {
        id: 3,
        image: 'https://boxanalitika.ru/bitrix/components/bitrix/blog/show_file.php?fid=2411&width=1000&height=1000',
        userName: 'Barrera',
        messages: [{ message: 'Where are you?', creationDate: 1604678443606, isOwnMes: true },
        { message: ' Chuck Norris starred in a sequel to the movie "300" It"s called "1" ', creationDate: 1604678131748, isOwnMes: false }]
    },
    {
        id: 4,
        image: 'https://cps-static.rovicorp.com/2/Open/Getty/Bruce%20Willis/_derived_jpg_q90_310x470_m0/91126184.jpg',
        userName: 'Bruce Willis',
        messages: [{ message: "Whats app buddy? ", creationDate: 1604678443606, isOwnMes: true },
        { message: 'The new "Super Earths" found were round-housed into existence by Chuck in seconds.', creationDate: 1604678131748, isOwnMes: false }]
    },
    {
        id: 5,
        image: 'https://victor-mochere.com/wp-content/uploads/2019/02/Best-quotes-from-Jackie-Chan.jpg',
        userName: 'Jakie Chan',
        messages: [{ message: 'I am waiting for you! Hurry up!', creationDate: 1604678443606, isOwnMes: true },
        { message: "Chuck Norris doesn't shuck oysters. He chucks them.", creationDate: 1604678131748, isOwnMes: false }]
    },
    {
        id: 6,
        image: 'https://ru.citaty.net/media/authors/sylvester-stallone.jpeg',
        userName: 'Sylvester Stallone',
        messages: [{ message: 'Give me back my money!', creationDate: 1604678443606, isOwnMes: true },
        { message: "Chuck Norris can TKO King Hippo in Mike Tyson's Punch Out.", creationDate: 1604678131748, isOwnMes: false }]
    },
    {
        id: 7,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Conor_McGregor_2015.jpg/1200px-Conor_McGregor_2015.jpg',
        userName: 'Conor McGregor',
        messages: [{ message: 'Would you like to drink some whiskey?', creationDate: 1604678443606, isOwnMes: true },
        { message: 'When Chuck Norris farts, everyone around him says "excuse me Mr. Norris"!', creationDate: 1604678131748, isOwnMes: false }]
    },

];

export interface Contact {
    id: number,
    image: string,
    userName: string,
    messages: Message[]
}
export class IContact implements Contact {
    constructor(
        public id: number,
        public image: string,
        public userName: string,
        public messages: Message[]
    ) { }
}

export interface Message {
    message: string,
    creationDate: number,
    isOwnMes: boolean
}
export class IMessage implements Message {
    constructor(
        public message: string,
        public creationDate: number,
        public isOwnMes: boolean
    ) { }
}




