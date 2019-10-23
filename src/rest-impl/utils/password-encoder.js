import bcrypt from 'bcrypt';
const saltRounds = 10;

async function encode(password){

    const salt = await bcrypt.genSalt(saltRounds);
    const passwordEncrypted = await bcrypt.hash(password,salt);

    return passwordEncrypted;
}

async function match(passwordInput, userDbPassword){
    return  await bcrypt.compare(passwordInput, userDbPassword);
}



export default {encode:encode, match:match}