import mongoose from './config';
import userRepository from './repositories/user.repository'

export default {connection: mongoose, userRepository:userRepository};