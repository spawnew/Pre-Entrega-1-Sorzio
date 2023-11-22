import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ description, img, price, stock, name}) => {
   
    const onAdd = (items) => { 
        alert(`Se agregaron ${items} al carrito`)
     }

  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <div className="d-flex">
            <img src={img} alt="" height={"800px"} />
            <div>
            <p className="card-text"> {description} </p>
            <h3>Precio: ${price} </h3>
            <ItemCount stock={stock} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};