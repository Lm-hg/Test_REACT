export default function Form(props){

    return(
        <div className="page">

            <div className="parent">
                <form action="" onSubmit={props.envoyer}>
                     <span onClick={props.close}>&times;</span>
                    <div className="a">
                        <label htmlFor="">Nom d'article :</label>
                        <input type="text" name="" ref={props.nomRef} placeholder="Nom" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Le prix :</label>
                    <input type="number" name=""ref={props.prixRef} placeholder="Prix" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Garanti :</label>
                      <input type="number" name="" ref={props.garantiRef} placeholder="Garanti" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Type :</label>
                        <input type="text" name="" ref={props.typeRef} required />
                    </div>
                    <div className="a">
                        <label htmlFor="">Disponibilité :</label>
                        <input type="text" name="" ref={props.dispoRef} required />
                    </div>
                    <div className="bouton">

                        <input className="btn outline" type="submit" value="ADD" />
                    </div>

                </form>

            </div>
        </div>
    )
}