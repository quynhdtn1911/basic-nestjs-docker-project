import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log('Server is already connect to postgresql!')

}).catch(error => console.log(error))

export default AppDataSource


