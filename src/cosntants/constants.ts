import { IUser } from "../types/types";

export const initialUsers: IUser[] = [
    {
        name: 'Иванов Иван Иванович',
        birthDay: '15.06.1990',
        job: 'CEO проекта.',
        salary: 250000,
        experience: 5,
        email: 'myEmail@gmail.com'
    },
    {
        name: 'Петров Петя Петрович',
        birthDay: '03.11.1983',
        job: 'Product manager',
        salary: 150000,
        experience: 3,
        email: 'petya@gmail.com'
    },
    {
        name: 'Чеблять Коля Петрович',
        birthDay: '03.11.1991',
        job: 'developer',
        salary: 120000,
        experience: 1,
        email: 'petya@gmail.com'
    }
]