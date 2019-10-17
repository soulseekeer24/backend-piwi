import { assert } from 'chai';
import makeUser from '../../src/domain/user/user';

describe('User domain', () => {
    let userOf;
    let userId = new Date().getMilliseconds();

    it('Should  create a user factory', () => {
        const idGenerator = {
            generateID: () => {
                return userId;
            }
        };
        const userValidator = {
            isValid: () => {
                return true;
            }
        }
        userOf = makeUser({
            idGenerator: idGenerator,
            userValidator: userValidator
        });

        assert.isFunction(userOf, 'factory created');

    });

    it('Should create a User frozen', async () => {
        const user = {
            username: 'testuser',
            password: 'passtest',
            createdAt: new Date()
        };

        const userCreated = await userOf(user);

        assert.notTypeOf(userCreated, 'promise');
        assert.isFrozen(userCreated, 'factory created');
        assert.equal(userCreated.username, 'testuser');
        assert.equal(userCreated.password, 'passtest');
        assert.isNotNull(userCreated.id, userId);
    });
});