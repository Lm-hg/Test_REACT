import { supprimer,ajouter,modifier,afficher_articles,supprimer_IdObject } from './database.js'
import express from 'express'
import cors from 'cors'
import { ObjectId } from 'mongodb'

const app = express()
app.use(cors())
app.use(express.json())
//on affiche tous les articles 
app.get('/', async(req,res)=>{
    const data = await afficher_articles()
    res.status(200).json(data);
})
//on supprime un article
app.post('/sup', async(req,res)=>{
    const id = req.body.id;
    if(Number.isInteger(id)){

        await supprimer(id);
    }else{
        await supprimer_IdObject(id);
    }
    res.status(200).json("ok")

})
//on ajoute un nouvel article
app.post('/add', async(req,res)=>{
    const data = req.body;
    await ajouter(data);
    res.status(200).json(data);

})
//on modifie un article
app.post('/update',async(req,res)=>{
    const data=req.body;
    await modifier(data)
    console.log(data);
    res.status(200).json(data);

})




app.listen(8888,function(){
    console.log('oui oui');
})

