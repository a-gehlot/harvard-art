import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt}/>
      <Route path='/galleries/:galleryId'>
        <GalleryView galleries={harvardArt} />
      </Route>
    </div>
  );
}

export default App;
