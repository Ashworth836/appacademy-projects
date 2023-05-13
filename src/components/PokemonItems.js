import { useSelector } from "react-redux";
import { load } from "../store/items";

export const fetchPokemonItems = (pokemonId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/pokemon/${pokemonId}/items`);
    const data = await response.json();
    dispatch(load(data, pokemonId));
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};


const PokemonItems = ({ pokemon, setEditItemId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemon) {
      dispatch(fetchPokemonItems(pokemon.id));
    }
  }, [pokemon, dispatch]);

  const items = useSelector((state) => {
    if (!pokemon.items) return null;
    return pokemon.items.map((itemId) => state.items[itemId]);
  });

  if (!items) {
    return null;
  }

  return items.map((item) => (
    <tr key={item.id}>
      <td>
        <img
          className="item-image"
          alt={item.imageUrl}
          src={`${item.imageUrl}`}
        />
      </td>
      <td>{item.name}</td>
      <td className="centered">{item.happiness}</td>
      <td className="centered">${item.price}</td>
      {pokemon.captured && (
        <td className="centered">
          <button onClick={() => setEditItemId(item.id)}>
            Edit
          </button>
        </td>
      )}
      {pokemon.captured && (
        <td className="centered">
          <button>
            Delete
          </button>
        </td>
        
      )}
    </tr>
  ));
};

export default PokemonItems;