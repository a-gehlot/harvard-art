import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './GalleryNavigation.css'

function GalleryNavigation({galleries}) {
    return (
        <nav>
            <NavLink to='/' exact path='/'>
                Home
            </NavLink>
            <h1>Galleries</h1>
            {galleries.records.map((gallery) => <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>{gallery.name + '\n'}</NavLink>)}
        </nav>
    )
}

export default GalleryNavigation;
