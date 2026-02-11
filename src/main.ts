//main.ts

import { User } from "./interface";
import { getAdultName, getNameById, updateAge} from "./map-practice";
const users: User[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 15 },
  { id: 3, name: "Charlie", age: 30 },
  { id: 4, name: "David", age: 12 },
];

const adultName = getAdultName(users);
console.log(adultName);

try{
    const user = getNameById(users, 99);
    console.log(user);
}
catch(error){
    console.log(String(error));
}

console.log(users)
const newUsers = updateAge(users, 2, 16);
console.log(newUsers);
console.log(users);