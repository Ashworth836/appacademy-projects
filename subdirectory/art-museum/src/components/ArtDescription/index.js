import { Link, useParams } from "react-router-dom";
import './ArtDescription.css';

export default function ArtDescription({gallery}) {
  const { artId } = useParams();
  const art = gallery.objects.find(art => art.id === Number(artId))

  return (
    <>
      <a href={gallery.url}>
        <h2>{art.title}</h2>
      </a>
      <Link to={`/galleries/${gallery.id}`}>Back to gallery</Link>
      <p>{art.description}</p>
      <p>{art.medium}</p>
      <p>{art.creditline}</p>
      {art.images.map((image) => {
        return (
          <img src={image.baseimageurl} alt={image.format} key={image.id} />
        );
      })}
    </>
  );
}