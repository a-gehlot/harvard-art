import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"

function ArtDescription ({gallery}) {
    let { artId } = useParams();
    console.log(artId)
    console.log(gallery.objects[0].id)
    let art = gallery.objects.find((art) => art.id === parseInt(artId));
    console.log(art);
    return (
        <div>
            <Link to={`/galleries/${gallery.id}`}>
                Back to Gallery
            </Link>
            <a href={`${art.url}`}>
                {art.title}
            </a>
            <div>
                <h2>{art.description}</h2>
                <h2>Technique: {art.technique}</h2>
                {art.images.map((img) => <img key={img.idsid} src={img.baseimageurl} alt="art"></img>)}
                <h2>{art.creditline}</h2>
            </div>
        </div>
       

    )
}

export default ArtDescription;
