import { MongoClient, ObjectId } from "mongodb";

//connexion à la base de données
async function connexion(){

    const uri='mongodb://localhost:27017';
    const  client = new MongoClient(uri);

    await client.connect();

    const dbname='marche';
    const collectionName = 'articles';

    const database = client.db(dbname);
    const collection = database.collection(collectionName);
    return collection;
}
//on supprime un article dont l'id est un int
async function supprimer(id){
    const database = await connexion();
    let identifiant;

    identifiant=parseInt(id)
    
    database.deleteOne({_id:identifiant});
}
//on supprime un article dont l'id est un objectId
async function supprimer_IdObject(id){
    const database= await connexion();
    let identifiant = new ObjectId(id);
    database.deleteOne({_id:identifiant});

}
//on affiche les articles
async function afficher_articles(){
    const database= await connexion();
    const article = database.find({}).toArray();
    return article;
}
//on ajoute un nouvel article
async function ajouter(data){
    const database = await connexion();
    const article = {
        "name" : data.name,
        "type" : data.type,
        "price" : data.price,
        "rating" : 1,
        "warranty_years" : data.warranty_years,
        "available" : data.available,

    };
    database.insertOne(article);
}
//on modifie les données d'un article
async function modifier(data){
    const database = await connexion();

    let id;
    if((ObjectId.isValid(data.id))){
        id=new ObjectId(data.id);
    }else{
        id=parseInt(data.id)
    }
    database.updateOne(
        {"_id" : id},
        {$set : { 
        "name" : data.name,
        "type" : data.type,
        "price" : data.price,
        "warranty_years" : data.warranty_years,
        "available" : data.available,
    }})
}

export {supprimer,ajouter,modifier,afficher_articles,supprimer_IdObject,connexion};