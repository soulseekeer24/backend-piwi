
export default function makeCreateUser({ idGenerator, User, userRepository, passwordEncoder, logger }) {
    return async function createUser({
        username,
        password
    }) {
        try {
            if (idGenerator == null || idGenerator == undefined) {
                throw new Error(`idGenerator is required`);
            }
            if (User == null || User == undefined) {
                throw new Error(`User function is required`);
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





            const userAlreadyExist = await userRepository.existByUsername(username);

            if (userAlreadyExist) {
                throw new Error(`User for ${username} already exist`);
            }

            const encodedPassword = await passwordEncoder.encode(password);

            const newUser = await User({
                id: idGenerator.generateID(),
                username: username,
                password: encodedPassword,
                createdAt: new Date()
            });

            const userStored = await userRepository.persist(newUser);
            return Object.freeze({
                username: userStored.username,
                createdAt: userStored.createdAt
            });

        } catch (e) {
            logger.error(e.message);
            return { error: e };
        }
    }
}