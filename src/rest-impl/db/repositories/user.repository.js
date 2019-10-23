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

}, { _id: false });


const UserRepository = mongoose.model('user', userSchema);

async function existByUsername(username){
    return await UserRepository.exists({username:username});
 };

 async function findByUsername(username){
     return await UserRepository.findOne({username:username});
 }

async function persist(userToSave){
        return await UserRepository.create(userToSave);
};
 
export default {existByUsername :existByUsername , persist: persist , findByUsername:findByUsername};