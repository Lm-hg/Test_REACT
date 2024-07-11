import { useState,useRef } from "react";
import FormUpDate from "./FormUpDate";
export default function Articles(props){
    const idRef= useRef();
    const nomRef= useRef();
    const tarifRef= useRef();
    const garantiRef= useRef();
    const dispoRef= useRef();
    const typeRef= useRef();
    const sup = function(id){
        console.log(id);
        fetch('http://localhost:8888/sup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

        //pour modifier les informations
        const [etat, setEtat] = useState({display:"none"})
        //le formulaire s'affiche
        const UpdateArticle = function(){
            setEtat({display:"block"});
        }
        //on ferme le formulaire
        const fermer= function(){
            setEtat({display:"none"});
        }
    //on soumet le formulaire
    const Modifier =async function(){
        const id= idRef.current.value;
        const name= nomRef.current.value;
        const price= tarifRef.current.value;
        const warranty_years= garantiRef.current.value;
        const type= typeRef.current.value;
        const available= dispoRef.current.value;
        const data = {id, name, type, price, warranty_years, available };
        try{
            const response = await fetch('http://localhost:8888/update', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
              const daa=await response.json()
              console.log("ok");
        }catch(error) {
            console.error('Erreur de réseau ou autre', error);
          }
    }

    return(
        <>
        
        <div className="container">
            <div className="wrapper">

            <div className="banner-image">
                <img src="https://th.bing.com/th/id/OIP._t0FfrTCRh4F8RHQZxLUQAHaCo?w=292&h=124&c=7&r=0&o=5&pid=1.7" alt="" srcset="" />
            </div>
                <input type="hidden" name="" value={props.id} />
                <h1>{props.nom}</h1>
                <p>Prix: {props.prix}</p>
                <p>Type: {props.type}</p>
                <p> Garanti {props.garanti} ans</p>
                <p>Disponiblité: {props.dispo}</p>



                </div>
            <div className="button-wrapper">
                <button className="btn outline" onClick={() => sup(props.id)}>DELETE</button>
                <button className="btn fill" onClick={()=>UpdateArticle()}>UPDATE</button>

            </div>
        </div>
        <FormUpDate 
        etat={etat} 
        closed={fermer} 
        id={props.id}
        nom={props.nom}
        prix={props.prix}
        type={props.type}
        garanti={props.garanti}
        dispo={props.dispo}
        idRef={idRef}
        nomRef={nomRef}
        prixRef={tarifRef}
        typeRef={typeRef}
        dispoRef={dispoRef}
        garantiRef={garantiRef}
        modifier={Modifier}
        ></FormUpDate>
        </>
    )
}