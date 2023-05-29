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
}