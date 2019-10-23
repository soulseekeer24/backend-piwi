import { assert } from 'chai';

import makeRegisterUser from '../../src/usecase/user/register-user';
import makeCreateUser from '../../src/domain/user/user';



function setUp() {


    const idGenerator = {
        generateID: () => {
            return new Date();
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
        encode: (password) => {
            return password + '-encoded';
        }
    }

    return {
        idGenerator: idGenerator,
        userRepository: userRepository,
        passwordEncoder: passwordEncoder,
        logger: console
    }
}

describe('Register User function', async () => {
    const registerUser = makeRegisterUser(setUp());

    it('Should create a register user function', () => {
        assert.isFunction(registerUser);
    });
    const userRegister = await registerUser({ username: `userForTesting`, password: `password123` });

    it('Should create a user object frozen', () => {
        assert.isObject(userRegister);
        assert.notTypeOf(userRegister, 'promise');
        assert.isFrozen(userRegister);
    });

    it('password should be password123-encoded', () => {
        assert.equal(userRegister.password, 'password123-encoded');
    });

    it('Should have user id', () => {
        assert.notEqual(userRegister._id, undefined);
    });

    it('Should have created at', () => {
        assert.isNotNull(userRegister.createdAt);
    });

    it('Should have username', () => {
        assert.isNotEmpty(userRegister.username);
    });

});
