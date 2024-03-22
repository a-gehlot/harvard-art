import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ArtImageTile({art, galleryId}) {
    return(
        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
            <img src={art.primaryimageurl} alt="primary"></img>
        </Link>
    )
}

export default ArtImageTile;
