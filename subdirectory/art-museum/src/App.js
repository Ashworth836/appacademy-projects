import React from "react";
import harvardArt from './data/harvardArt'
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path='/'>
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
        </Route>
        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={harvardArt.records}/>
        </Route>
        <Route path='/not-found'>
          <h2>Page Not Found</h2>
        </Route>
        <Route path='*'>
          <Redirect to='/not-found' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
