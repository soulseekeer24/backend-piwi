export default function User({ id, username, password, createdAt }) {
        const user = { id, username, password, createdAt };
 
        return Object.freeze({
            id: user.id,
            username: user.username,
            password: user.password,
            createdAt: user.createdAt
        });

    }
