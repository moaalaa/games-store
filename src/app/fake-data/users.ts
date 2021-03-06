import { User, UserTypes } from "../Contracts/User";


export const USERS: User[] = [
    {
        id: 1,
        name: 'Admin',
        email: 'admin@example.com',
        type: UserTypes.Admin
    },
    {
        id: 2,
        name: 'Customer',
        email: 'customer@example.com',
        type: UserTypes.Customer
    },
];