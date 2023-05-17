
import {App} from "./index"
import * as http from "http";

require('dotenv').config();


const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

const port = normalizePort(process.env.PORT);

let host = '127.0.0.1';
// let host = '192.168.15.31';
App.set('port', port);
App.set('host', host)

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
        default:
            throw error;
    }
};

const server = http.createServer(App);

server.on('error', errorHandler);
server.on('uncaughtException', server.close);
server.on('close', server.close);

server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
});

server.listen(port, async () => {
    console.log(`Server is running on port ${process.env.PORT} 👍`);
});


type A = <T, U>(x: T, y: U) => [T, U];

type B = <S>(x: S, y: S) => [S, S];

function f(a: A, b: B) {
    b = a; // Ok
    // a = b; // Error
}






























// export type Name = {name: string}
// export type Age = {age: number}

// type Union = Name | Age

// type Intersection = Name & Age

// const name = {name: 'Jane'};
// const age = {age: 32};
// const nameAndAge = { name: 'Jane', age: 32};

// let union: Union;
// let intersection: Intersection

// function filter(union: Union) {
//     if('age' in union){
//         union.age
//     }
// }

// const table = [55, 47, 96];

// const table1 = [55, 89, 100];

// table.map((_, i) => {
//     const c = table1[i]
//     console.log(c)
// })

// const b = table[1]!


// const toto = {
//     first: 'First Name',
//     last: 'Last Name',
//     age: 55
// };

// toto.first = '96'

// union = name;
// union = age;
// union = nameAndAge;

// interface GenericIdentityFn<Type> {
//     (arg: Type): Type;
//   }
   
//   function identity<Type>(arg: Type): Type {
//     return arg;
//   }
   
//   let myIdentity: GenericIdentityFn<number> = identity;

// function didi<Type>(didi: Type): Type {
//     return didi
// }

// let titi = didi<string>('ottitoti')

// let totod = didi<number>(55555)

// // let myIdentity: <Type>(arg: Type) => Type = didi;

// console.log(myIdentity)


// console.log(typeof titi)

// console.log(typeof totod
//     )


//     class GenericNumber<NumType> {
//         zeroValue: NumType;
//         add: (x: NumType, y: NumType) => NumType;
//       }
       
//       let myGenericNumber = new GenericNumber<number>();
//       myGenericNumber.zeroValue = 0;
//       myGenericNumber.add = function (x, y) {
//         return x + y;
//       };

//       let generator = myGenericNumber.add(2,5)
//       console.log(generator)

//       console.log(myGenericNumber)


//       class BeeKeeper {
//         hasMask: boolean = true;
//       }
       
//       class ZooKeeper {
//         nametag: string = "Mikle";
//       }
       
//       class Animal {
//         numLegs: number = 4;
//       }
       
//       class Bee extends Animal {
//         keeper: BeeKeeper = new BeeKeeper();
//       }
       
//       class Lion extends Animal {
//         keeper: ZooKeeper = new ZooKeeper();
//       }
       
//       function createInstance<A extends Animal>(c: new () => A): A {
//         return new c();
//       }
       
//       createInstance(Lion).keeper.nametag;
//       createInstance(Bee).keeper.hasMask;