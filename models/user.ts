import { Model } from "sequelize";


interface LoginAttributes {
  email: string,
  password: string
}

interface UserAttributes {
  id: string
  email: string,
  password: string
  companyName: string, 
  numberOfUsers: string,
  numberOfProduct: string,
  percentage: number
  photo?: string

}
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: string;
    email!:string;
    password!: string 
    companyName!: string
    numberOfUsers!: string
    numberOfProduct!: string
    percentage!: number;
    static associate(models: any) {
      // define association here
    }
  }
  User.init(
    {

      id:{
        type: DataTypes.UUID,
        primaryKey: true
      } ,
      email:{
        type:  DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      photo: DataTypes.STRING,
      companyName: DataTypes.STRING,
      numberOfUsers: DataTypes.STRING,
      numberOfProduct: DataTypes.STRING,
      percentage: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  (async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();

  // return User;
};


