//dependencies
import uuid from 'uuid/v4';
import dbContext from '../db'
import morgan from 'morgan';

//handlers
import passwordEncoder from '../utils/password-encoder';
import jwtCreator from '../utils/jwt-creator'
//use cases
import makeRegisterUser from '../../usecase/user/register-user';
import makeLoginUser from '../../usecase/user/login-user';

const idGenerator = {
    generateID: () => {
        return uuid();
    }
};

 const registerUser = makeRegisterUser({idGenerator: idGenerator, 
    userRepository: dbContext.userRepository,
    passwordEncoder: passwordEncoder,
    logger: console});

 const loginUser = makeLoginUser({jwtCreator: jwtCreator, 
    userRepository: dbContext.userRepository,
    passwordEncoder: passwordEncoder,
    logger: console} );

 export default Object.freeze({registerUser: registerUser, loginUser:loginUser});