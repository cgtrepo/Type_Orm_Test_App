import { User } from "../../base-entities/user.model";
import { DTS } from "../../config/data-source";

export class UserServiceImpl {

    identity<Type>(arg: Type): Type {
        console.log('Is here 123')
        console.log(arg)
        return arg;
    }


    async getAllUserList(reqData: any, callback: Function) {
        console.log('Is here 12')
       const users = await DTS.getRepository(User).find()
       console.log(users)
       callback(users)
    }


    async createUser(reqData: User, callBack: Function) {
        console.log(reqData)
        const user = this.identity(await DTS.getRepository(User).create(reqData))
        const results = await DTS.getRepository(User).save(user)
        console.log(results)
        callBack(results)
    }



    async funWithGeneric(onGet: string, callBack: Function) {
        console.log(onGet)
        let output = this.identity(onGet)
        console.log(output)
        callBack(output)
    }


//     interface SuperbUser {
//     userId: number;
//     macAddress: string;
//     username: string;
//     email: string;
//     password: string;
//     firstName: string;
//     lastName: string;
//     roles: ('Admin' | 'Editor' | 'Author')[]
// };

// type Subscriber<___ extends $___, $___> = Pick<___, keyof $___>;

// const subscriber: Subscriber<SellerIncommeStat, Toto> = { bebe: 'pfppp', papa: 'papap', age: 12 }

// const subscriber2: Subscriber<SellerIncommeStat3, Tata> = { name: 'pfppp', age: 12 }

// console.log(subscriber);
// /*
// {
//   "userId": 4,
//   "macAddress": "a:5ub:mach1ne",
//   "username": "sub_user",
//   "email": "sub_user@gmail.com",
//   "password": "12345678",
//   "firstName": "Abdullah",
//   "lastName": "Numan"
// }
// */

// console.log(subscriber.roles); // undefined
}