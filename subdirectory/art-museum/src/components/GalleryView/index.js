import React from "react";
import { useParams, Route } from "react-router-dom";
import ArtImageTile from "./ArtImageTile";
import ArtDescription from "../ArtDescription";


export default function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const gallery = galleries.find(gallery => gallery.id.toString() === galleryId);

  const artWorks = gallery.objects.map((art) => {
    return <ArtImageTile key={art.id} art={art} gallery={gallery} />;
  });

  return (
    <div>
      <h2>{gallery.name}</h2>
      <h3>{gallery.theme}</h3>
      <Route exact path="/galleries/:galleryId">
        {artWorks}
      </Route>
      <Route path="/galleries/:galleryId/art/:artId">
        <ArtDescription gallery={gallery} />
      </Route>
    </div>
  );
}
