export enum UserTypes {
    Admin    = 'admin',
    Customer = 'customer',
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    type: UserTypes;
}