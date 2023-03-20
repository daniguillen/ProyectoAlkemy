import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom";
import favorito from '../logos/favoritos.png'

export function Favoritos (props) {

    let token = sessionStorage.getItem("token")  
 



  //  {!token ? <Navigate to="/"/>:<>

console.log(props)
    return(
        <>
            {!token ? <Navigate to="/" />:<>
                {props.favoritos.length===0?<h3 
                style={{color:"white", width:"100%", display:"flex", justifyContent:"center", marginTop:"2rem"}}>No tiene favoritos</h3>:
            
                    <div className="row" >

                
                        {
                        props.favoritos.map((favoritos, i) => {
                            return ( 
                                <div className="col-3" key={i}>
                                    {console.log("estoy en favoritos en id ",favoritos.id)}
                                    <div className="card my-3 img-fluid"   style={{ width: '18rem' }}  >
                                    
                                        <img className="card-img-top img-fluid"
                                            src={favoritos.imgURL}
                                            alt="Card cap"
                                        />

                                            <button className="favourite-btn favorito"  
                                           
                                                    onClick={props.activar} 
                                                    data-movie = {favoritos.id} 

                                                    ><img src={favorito} 
                                                    className="img-fluid"
                                                    height="30" 
                                                    alt="favorito">
                                                    </img></button>
                                                
                                        <div className="card-body">

                                            <h5 className="card-title" >
                                                {favoritos.title?favoritos.title.substring(0,50):null}
                                            </h5>
                                            
                                            <p className="card-text">{favoritos.title?favoritos.overview.substring(0,100):null}  
                                            </p>

                                            <div className="contenedorboton">
                                                <Link to={`/detalle?pelisID=${favoritos.id}`} 
                                                    className="btn btn-primary botontarjeta" >mas detalle
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } )}
                    </div>  
            } </>}
        </>

    )
}