import { Item } from "./Item";

// Tiene importado el compenente Item al cual le pasa las props.

export const ItemList = ({movies}) => {
  return (
    <div>
        {movies.map((movie)=>{ 
        let {id, title} = movie;
        return(
            <Item key={id} id={id} title={title} />
        )
        })}
    </div>
  )
}
