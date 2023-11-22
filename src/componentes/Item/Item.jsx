import { Link } from "react-router-dom";

export const Item = ({id, name, img, price }) => {
    return (
      <>
      <div className="border m-2 col-md-3">
        <div className="card col-12" >
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div >
              <img src={img} alt="" width={"450px"} height={"450px"}/>
            </div>
            <h4>${price}</h4>
            <div className="d-flex flex-row-reverse">
            <Link to={`/item/${id}`}>
              <button className="btn btn-primary ">Detalles</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
      
      </>
    );
  };