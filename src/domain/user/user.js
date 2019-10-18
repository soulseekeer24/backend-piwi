export default function makeUser({ userValidator }) {
    if (!userValidator) {
        throw Error('userValidator required');
    }

    return async function user({ id, username, password, createdAt }) {
        const user = { id, username, password, createdAt };

        if (!userValidator.isValid(user)) {
            throw Error('invalid user');
        }

        return Object.freeze({
            id: user.id,
            username: user.username,
            password: user.password,
            createdAt: user.createdAt
        });

    }

}