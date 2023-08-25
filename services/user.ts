
const User = require("../models/user")
// import User from '../models/user'



 export default class UserService {
    // /**
    //  *
    //  * @param req Request
    //  */
    public static async getAll() {
      const data = await User.findAll({
        order: [['createdAt', 'desc']],
      })

      return data
    }

    public static async Create(body:any) {
       console.log(User)
        const data = await User.create(body)
  
        return data
      }
  
    // /**
    //  *
    //  * @param id
    //  * @param paranoid
    //  */

  
    // /**
    //  *
    //  * @param id
    //  * @param paranoid
    //  */

  
    // /**
    //  *
    //  * @param id
    //  * @param paranoid
    //  * note: find by id only find data not include relation
    //  */

  
    // /**
    //  *
    //  * @param email
    //  */

  
    // /**
    //  *
    //  * @param formData
    //  * @param txn Transaction Sequelize
    //  */
 
  
    // /**
    //  *
    //  * @param id
    //  * @param formData
    //  * @param txn Transaction Sequelize
    //  */

  
    // /**
    //  *
    //  * @param id
    //  * @param force - Force Deleted
    //  */

  
    // /**
    //  *
    //  * @param id - Restore data from Trash
    //  */

  
    // /**
    //  *
    //  * @param ids
    //  * @param force
    //  * @example ids = ['id_1', 'id_2']
    //  */
 
  
    // /**
    //  *
    //  * @param ids
    //  * @example ids = ["id_1", "id_2"]
    //  */

  }
  
  
  