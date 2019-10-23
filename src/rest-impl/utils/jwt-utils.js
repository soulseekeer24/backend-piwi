import jwt from 'jsonwebtoken';


//TODO; Env variable
const secretKey = 'secretkey';
const expirationTime = 360;


 function generateToken(user)
{
    const token = jwt.sign({ user_id: user.user_id, username: user.username }, secretKey, {
        algorithm: 'HS256',
        expiresIn: expirationTime
      })

      return token;
}

export default { generateToken:generateToken};