import { assert } from 'chai';

import makeLogInUser from '../../src/usecase/user/login-user';
import makeCreateUser from '../../src/domain/user/user';



function setUp() {

    const userValidator = {
        isValid: () => {
            return true;
        }
    }
    const jwtCreator = {
        generateToken: (user) => {
            return 'MySecretToken';
        }
    }

    const userRepository = {
        existByUsername: (userName) => {
            return userName == 'testExist';
        },
        persist: (user) => {
            return user;
        }
    }
    const passwordEncoder = {
        match: (password) => {
            return true;
        }
    }

    const createUser = makeCreateUser({
        userValidator: userValidator
    });
    return {
        createUser: createUser,
        userRepository: userRepository,
        passwordEncoder: passwordEncoder,
        jwtCreator: jwtCreator,
        logger: console
    }
}


describe('Login User function', () => {
    const logInUser = makeLogInUser(setUp());

    it('should create a function', () => {
        assert.isFunction(logInUser);
    })


});