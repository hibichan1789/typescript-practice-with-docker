//map-practice.ts
import { User } from "./interface";

export function getAdultName(users:User[], age:number=18):string[]{
    return users.filter(user=>user.age>=age).map(user=>user.name);
}

export function getNameById(users:User[], id:number):string{
    const selectedUser =  users.find(user=>user.id === id);
    if(!selectedUser){
        throw new Error(`id:${id}のユーザーは存在しません`);
    }
    return selectedUser.name;
}

export function updateAge(users:User[], id:number, newAge:number):User[]{
    return users.map(user=>{
        if(user.id !== id){
            return {...user};
        }
        return {...user, age:newAge};
    });
}