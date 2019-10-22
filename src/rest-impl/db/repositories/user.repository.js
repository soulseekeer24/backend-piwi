import mongoose from '../config';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: String
    },
    username: {
        type: String,
        index: true,
        unique: true
    },
password: {
    type: String,
},
    createdAt: { type: Date},

});


const UserRepository = mongoose.model('user', userSchema);

async function existByUsername(username){
    const exist = await UserRepository.exists({username:username});
     return exist;
 };

async function persist(userToSave){
     const userStored = await UserRepository.create(userToSave);
    return userStored;
};
 
export default {existByUsername :existByUsername , persist: persist};