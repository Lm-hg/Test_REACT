import React from 'react'
import { useEffect, useState, useRef } from 'react'
import Articles from './component/Articles'
import Nav from './component/Nav'
import Search from './component/Search'
import Profil from './component/Profil'
import Form from './component/Form'
import './App.css'

function App() {
 const articles=[];
 const nomRef= useRef();
 const tarifRef= useRef();
 const garantiRef= useRef();
 const dispoRef= useRef();
 const typeRef= useRef();

 const [data, setData]=useState(articles)
 //on reçoit les articles du server
 useEffect(() => {
  fetch('http://localhost:8888')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);

//on affiche le formulaire d'ajout d'articles
const [etat, setEtat]= useState({display:"none"});
  const affiche= ()=>{
      setEtat({display:"block"});
  }
//Les liens qui ne conduisent nulle part
const navLink=["Accueil","Femme","Homme","Enfant & bébé","A propos"];
//on ferme le formulaire
  const close=()=>{
    setEtat({display:"none"});
  }
  //on soumet le formulaire
  const Submitformulaire = async (e) => {
    e.preventDefault();
    const name= nomRef.current.value;
    const price= tarifRef.current.value;
    const warranty_years= garantiRef.current.value;
    const type= typeRef.current.value;
    const available= dispoRef.current.value;
    const data = { name, type, price, warranty_years, available };
  
    try {
      if(name!=' ' 
      && price!=' ' 
      && warranty_years != ' '
      && available != ''
      && type!=' '){

        const response = await fetch('http://localhost:8888/add', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const daa=await response.json()

        setData((prevArticles) => [...prevArticles, daa]);
        const form = document.querySelector('form')
        var div=document.querySelector('.page')
        form.reset();
        div.style.display='none'


      }else{
        alert("Veuilez remplir chaque champ");
      }
    } catch (error) {
      console.error('Erreur de réseau ou autre', error);
    }
  

  };


   return (
    <>
    <header>
      <Search></Search>
      <Nav lien={navLink}></Nav>
      <Profil></Profil>
      <button onClick={affiche}>ADD</button>
    </header>
    <main>

    {data.map((a)=>(
      <Articles id={a._id} nom={a.name} type={a.type} dispo={a.available}  garanti={a.warranty_years} prix={a.price} ></Articles>
    ))}
    <Form etat={etat} close={close} envoyer={Submitformulaire} nomRef={nomRef} prixRef={tarifRef} garantiRef={garantiRef} typeRef={typeRef} dispoRef={dispoRef}></Form>
    </main>
    </>
  )
}

export default App
