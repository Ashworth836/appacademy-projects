import { Link } from "react-router-dom";

export default function  ArtImageTile({ art, gallery }) {

    console.log(art.primaryimageurl);
    return (
        <Link to={`/galleries/${gallery.id}/art/${art.id}`}>
            <img src={art.primaryimageurl} art={gallery.name} />
        </Link>
    )
}