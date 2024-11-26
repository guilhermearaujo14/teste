import express,  { Request, Response, Router }  from "express";

const app = express();
const route = Router();

app.use(express.json())

route.get('/',(req: Request, res: Response)=>{
    res.status(200).send({ message: 'Minha rota de teste esta funcionando.'})
})

app.use(route)

app.listen(3333, ()=>{
    console.log('Servidor funcionando na porta 3333');
})