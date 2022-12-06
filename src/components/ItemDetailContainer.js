import { useEffect } from "react";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  useEffect(() => {
    console.log('received itemId to: ', itemId);
    return () => {
      console.log('Will change itemId: ', itemId);
    }
  }, [itemId]);

  return (
    <div>
      <h2>Detalles de la pelicula: </h2>
      title
      descripción
      fecha
    </div>
  )
}

export default ItemDetailContainer