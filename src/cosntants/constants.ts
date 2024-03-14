import { IUser } from "../types/types";

export const initialUsers: IUser[] = [
    {
        name: 'Иванов Иван Иванович',
        birthDay: '15.06.1990',
        job: 'CEO проекта.',
        salary: 250000,
        experience: 5,
        email: 'ivanov@gmail.com'
    },
    {
        name: 'Петров Петя Петрович',
        birthDay: '13.04.1995',
        job: 'Product manager',
        salary: 150000,
        experience: 3,
        email: 'petya@gmail.com'
    },
    {
        name: 'Сидоров Коля Иванович',
        birthDay: '03.11.1991',
        job: 'developer',
        salary: 120000,
        experience: 1,
        email: 'nikolay@gmail.com'
    }
]