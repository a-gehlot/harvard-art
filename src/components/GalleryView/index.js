import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function GalleryView ({galleries}) {
    let { galleryId } = useParams()
    let record = galleries.records.find((gallery) => gallery.gallerynumber === galleryId)
    return (
        <div>
            <h1>Hello from GalleryView</h1>
            <h2>{record.name}</h2>
        </div>
    )
}

export default GalleryView;
