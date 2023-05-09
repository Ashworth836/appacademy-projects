import { useSelector } from 'react-redux';
import ProduceDetails from './ProduceDetails';
import './ProduceList.css';

function ProduceList() {
  

  const produce = useSelector((state) => state.produce)
  const produceArr = Object.values(produce);

  
  // console.log("GetAllProduce Const: ", getAllProduce())
  console.log("Produce Const: ", produce)
  console.log("ProduceArr Const: ", produceArr)

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;