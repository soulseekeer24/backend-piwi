
import  express  from'express';
import  authService from './services/auth.services';

const app = express();
app.use(express.json());

app.post('/create-user', async function (req, res) {
  const user = await authService.registerUser(req.body)
  res.send(user);
});

export default async function init(port){
    await app.listen(port);
    console.log(`Listening on port ${port}`)

}




