import makeUser from '../../../../domain/user/user'
import randomUUIDV4 from '../../helper/id-generator';
import userValidator from '../user/user-validator';

export default makeUser({
    idGenerator: randomUUIDV4,
    userValidator: userValidator
});