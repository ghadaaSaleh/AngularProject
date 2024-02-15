export interface Iuser {
    fullName:string;
    email:string;
    mobile:string[];
    password:string;
    address:{ city:string;
        postalCode:string;
        street:string;}
}
