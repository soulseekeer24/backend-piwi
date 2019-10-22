//dependencies
import uuid from 'uuid/v4';
import dbContext from './db'
import morgan from 'morgan';

//handlers
import passwordEncoder from './utils/password.encoder';
import jwtCreator from './utils/jwt-creator'
//use cases
import makeRegisterUser from '../usecase/user/register-user';
import makeLoginUser from '../../usecase/user/login-user';

const idGenerator = {
    generateID: uuid()
};

 const registerUser = makeRegisterUser(idGenerator, dbContext.userRepository,passwordEncoder,morgan);

 const loginUser = makeLoginUser( dbContext.userRepository,passwordEncoder,jwtCreator,morgan);

 export default Object.freeze({registerUser: registerUser, loginUser:loginUser});