import { useParams, Route } from "react-router-dom/cjs/react-router-dom.min";
import ArtImageTile from "../ArtImageTile";

function GalleryView ({galleries}) {
    let { galleryId } = useParams()
    let record = galleries.records.find((gallery) => gallery.gallerynumber === galleryId)
    return (
        <div>
            <h1>Hello from GalleryView</h1>
            <h2>{record.name}</h2>
            <Route exact path='/galleries/:galleryid'>
                {record.objects.map((obj) => <ArtImageTile art={obj} galleryId={galleryId} key={obj.id} />)}
            </Route>
        </div>
    )
}

export default GalleryView;
