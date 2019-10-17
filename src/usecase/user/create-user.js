
export default function makeCreateUser({ buildUser, userRepository, passwordEncoder, logger }) {
    return async function createUser({
        username,
        password
    }) {
        try {
            const userAlreadyExist = await userRepository.existByUsername(username);

            if (userAlreadyExist) {
                throw new Error(`User for ${username} already exist`);
            }

            const encodedPassword = await passwordEncoder.encode(password);

            const newUser = await buildUser({
                username: username,
                password: encodedPassword
            });

            const userStored = await userRepository.persist(newUser);
            return Object.freeze({
                username: userStored.username,
                createdAt: userStored.createdAt
            });

        } catch (e) {
            logger.error(e.message);
            //TODO: error utility
            return { error: e };
        }
    }
}