import makeCreateUser from '../../../usecase/user/create-user'
import user from '../domain-build/user/user-builder';
import passwordEncoder from '../helper/encoder-decoder';
import userRepository from '../../db/mongodb/user-repository';

const createUser = makeCreateUser({
    buildUser: user,
    logger: console,
    passwordEncoder: passwordEncoder,
    userRepository: userRepository
})

export default createUser;