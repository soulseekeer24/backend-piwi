import bcrypt from 'bcrypt';
import { encode } from 'punycode';
//TODO: mover luego a configuraciones de ambiente
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

async function encode(password) {
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hash = await bcrypt.hashSync(myPlaintextPassword, salt);
    return hash;
}


export default { encode: encode };
