
export default function makeLogInUser({ userRepository, passwordEncoder, jwtCreator, logger }) {


    if (userRepository == null || userRepository == undefined) {
        throw new Error(`User Repository  is required`);
    }
    if (passwordEncoder == null || passwordEncoder == undefined) {
        throw new Error(`passwordEncoder  is required`);
    }
    if (logger == null || logger == undefined) {
        throw new Error(`logger is required`);
    }
    if (jwtCreator == null || jwtCreator == undefined) {
        throw new Error(`jwtCreator is required`);
    }

    return async function logInUser({
        username,
        password
    }) {
        try {

            const userToLogIn = await userRepository.findByUsername(username);

            if (!userToLogIn) {
                throw new Error(`username or password incorrect`);
            }

            const passwordMath = await passwordEncoder.match(password, userToLogIn.password);

            if (!passwordMath) {
                throw new Error(`username or password incorrect`);
            }

            const jwt = await jwtCreator.generateToken(userToLogIn);

            return jwt;

        } catch (e) {
            logger.error(e.message, e);
            return { error: e };
        }
    }
}