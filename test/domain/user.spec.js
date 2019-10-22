import { assert } from 'chai';
import User from '../../src/domain/user/user';

describe('Create user function', () => {
    let CreateUser;
    const userId = new Date().getMilliseconds();
    const userTestName = 'testUser';
    const userTestPassword = 'testPassword';
    const creationDate = new Date();
    it('Should  create a user factory function', () => {
    
        assert.isFunction(User, 'factory created');
    });

    let userCreated;

    it('Should create a User frozen', async () => {
        const user = {
            id: userId,
            username: userTestName,
            password: userTestPassword,
            createdAt: creationDate
        };

        userCreated =  User(user);
        assert.isFrozen(userCreated, 'factory created');
    });

    it('User should not be of type promise', () => {
        assert.notTypeOf(userCreated, 'promise');
    });

    it(`User.username should be ${userTestName}`, () => {
        assert.equal(userCreated.username, userTestName);
    });

    it(`User.password should be ${userTestPassword}`, () => {
        assert.equal(userCreated.password, userTestPassword);
    });

    it(`User.id should be ${userId}`, () => {
        assert.equal(userCreated.id, userId);
    });

    it(`User.createdAt should be ${creationDate}`, () => {
        assert.equal(userCreated.createdAt, creationDate);
    });
});