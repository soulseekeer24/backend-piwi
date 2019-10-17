
export default function makeUser({ idGenerator, userValidator }) {

    if (!idGenerator) {
        throw Error('idGenerator required');
    }
    if (!userValidator) {
        throw Error('userValidator required');
    }

    return async function user({ username, password, createdAt }) {

        const user = { username, password, createdAt };
        if (!userValidator.isValid(user)) {
            throw Error('invalid user');
        }

        return Object.freeze({
            id: idGenerator.generateID(),
            username: user.username,
            password: user.password,
            createdAt: user.createdAt
        });

    }

}