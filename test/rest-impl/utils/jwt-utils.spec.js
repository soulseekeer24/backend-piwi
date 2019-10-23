import { assert } from 'chai';
import jwtUtils from '../../../src/rest-impl/utils/jwt-utils';


describe('Jwt util encode/decode token', async() =>{

    const user = {
        _id: '2097256e-e315-4384-b873-c10ec23b8113',
        username: 'testuser',
        password: '1234567',
        createdAt: Date.now()
    };

    const token = await jwtUtils.generateToken(user);
    it('Should generate a JWT ', () =>{
assert.isNotEmpty(token);
    });
});

