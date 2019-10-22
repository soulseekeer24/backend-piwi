
import  express  from'express';
import  moongose from './db/';

const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

export default async function init(port){
    await app.listen(port);
    console.log(`Listening on port ${port}`)

}




