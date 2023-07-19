
import { Link } from 'react-router-dom'



const detailView = (props) => {
    return (
        <div style ={{'border':'1px solid black','display':'inline-block'}}>
            <h2>{props.item.trackName}</h2>
            <h3>
                <Link to={`/artist/${props.item.artistId}`}>
                    {props.item.artistName}
                </Link>
            </h3>
            <h3>
                <Link to={`/album/${props.item.collectionId}`}>
                    {props.item.collectionName}
                </Link>
            </h3>
            <h4>{props.item.primaryGenreName}</h4>
            <h4>{props.item.releaseDate}</h4>
        </div>
    )
}

export default detailView

