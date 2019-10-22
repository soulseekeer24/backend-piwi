export default function User({ _id, username, password, createdAt }) {
        const user = { _id, username, password, createdAt };
        return Object.freeze({
            _id: user._id,
            username: user.username,
            password: user.password,
            createdAt: user.createdAt
        });

    }
