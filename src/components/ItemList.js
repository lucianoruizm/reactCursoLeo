import { Item } from "./Item";
import './ItemList.css';

// Tiene importado el compenente Item al cual le pasa las props.

export const ItemList = ({movies}) => {

  return (
    <div className="moviesGrid">
        {movies.map((movie)=>{ 
        let {id, title, image} = movie;
        return(
            <Item key={id} id={id} title={title} image={image} />
        )
        })}
    </div>
  )
}
