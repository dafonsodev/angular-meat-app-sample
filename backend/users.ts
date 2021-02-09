export class User {
    constructor(public email: string,
                public name: string,
                private password: string){}

    matches(another: User): boolean {
        return another !== undefined && 
            another.email === this.email && 
            another.password === this.password
    }
}

export const users: {[key:string]: User} = {
    "daniel@gmail.com": new User('daniel@gmail.com', 'Daniel', '1234'),
    "dylan@gmail.com": new User('dylan@gmail.com', 'Dylan', '1234')
}