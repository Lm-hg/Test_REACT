export default function FormUpDate(props){

    return(
        <div className="pages" style={props.etat}>

            <div className="parent">
                <form action="" onSubmit={props.modifier}>
                     <span onClick={props.closed}>&times;</span>
                     <input type="hidden" ref={props.idRef} value={props.id} />
                    <div className="a">
                        <label htmlFor="">Nom d'article :</label>
                        <input type="text" ref={props.nomRef} defaultValue={props.nom}   placeholder="Nom" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Le prix :</label>
                    <input type="number" ref={props.prixRef} defaultValue={props.prix} placeholder="Prix" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Garanti :</label>
                      <input type="number" ref={props.garantiRef} defaultValue={props.garanti}  placeholder="Garanti:" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Type :</label>
                        <input type="text" ref={props.typeRef} defaultValue={props.type}  required />
                    </div>
                    <div className="a">
                        <label htmlFor="">Disponibilité :</label>
                        <input type="text" ref={props.dispoRef} defaultValue={props.dispo}  required />
                    </div>
                    <div className="bouton">

                        <input className="btn outline" type="submit" value="Update" />
                    </div>

                </form>

            </div>
        </div>
    )
}