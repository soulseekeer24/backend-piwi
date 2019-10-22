
import User from '../../domain/user/user'

export default function makeRegisterUser({ idGenerator,  userRepository, passwordEncoder, logger }) {

    if (idGenerator == null || idGenerator == undefined) {
        throw new Error(`idGenerator is required`);
    }

    if (userRepository == null || userRepository == undefined) {
        throw new Error(`User Repository  is required`);
    }
    if (passwordEncoder == null || passwordEncoder == undefined) {
        throw new Error(`passwordEncoder  is required`);
    }
    if (logger == null || logger == undefined) {
        throw new Error(`logger is required`);
    }

    return async function registerUser({
        username,
        password
    }) {
        try {

            const userAlreadyExist = await userRepository.existByUsername(username);

            if (userAlreadyExist) {
                throw new Error(`User for ${username} already exist`);
            }

            const encodedPassword = await passwordEncoder.encode(password);
      
            const newUser =  User({
                id: await idGenerator.generateID(),
                username: username,
                password: encodedPassword,
                createdAt: new Date()
            });

            const userStored = await userRepository.persist(newUser);
            
            return Object.freeze(userStored);

        } catch (e) {
            logger.error(e.message);
            return { error: e };
        }
    }
}