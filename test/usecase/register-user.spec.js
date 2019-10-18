import { assert } from 'chai';

import makeRegisterUser from '../../src/usecase/user/register-user';
import makeCreateUser from '../../src/domain/user/user';



function setUp() {

    const userValidator = {
        isValid: () => {
            return true;
        }
    }
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

    const CreateUser = makeCreateUser({
        userValidator: userValidator
    });
    return {
        idGenerator: idGenerator,
        User: CreateUser,
        userRepository: userRepository,
        passwordEncoder: passwordEncoder,
        logger: console
    }
}

describe('Create Register User function', async () => {
    const registerUser = makeRegisterUser(setUp());

    it('Should create a register user function', () => {
        assert.isFunction(registerUser);
    });
    const userRegister = await registerUser({ username: `userForTesting`, password: `password123` });

    it('Should create a user object frozen', () => {
        assert.isNotNull(userRegister);
        assert.notTypeOf(userRegister, 'promise');
        assert.isFrozen(userRegister);
    });

    it('password should be undefined', () => {
        assert.equal(userRegister.password, 'password123-encoded');
    });

    it('Should have user id', () => {
        assert.isNotNull(userRegister.id);
    });

    it('Should have created at', () => {
        assert.isNotNull(userRegister.createdAt);
    });

    it('Should have username', () => {
        assert.isNotNull(userRegister.username);
    });

});
