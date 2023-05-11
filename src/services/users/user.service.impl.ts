import { User } from "../../base-entities/user.model";
import { DTS } from "../../config/data-source";



export class UserServiceImpl {
    async getAllUserList(reqData: any, callback: Function) {
        console.log('Is here 12')
       const users = await DTS.getRepository(User).find()
       console.log(users)
       callback(users)
    }


    // async createUser(reqData: Partial<User>, callback: Function) {
    // const user = await DTS.getRepository(User).create(reqData)
    // const results = await DTS.getRepository(User).save(user)
    // callback(results)
    // }



    async createUser(reqData: User, callBack: Function) {
        console.log(reqData)
        const user = await DTS.getRepository(User).create(reqData)
        const results = await DTS.getRepository(User).save(user)
        callBack(results)
    }
}