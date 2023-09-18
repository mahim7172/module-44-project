import { FcApproval } from 'react-icons/fc';

const Priceoption = ({option}) => {
    const {name, price,details,features,id}=option
    return (
        <div >
          <div className="border-2 rounded-lg p-5 bg-stone-800 text-gray-400 flex flex-col">
          <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="text-2xl font-bold">{price}</p>
            <p>Features : </p>
     
        <ol > 
            {   
            features.map(featur=> <li className='flex items-center gap-1' key={id}><FcApproval></FcApproval>{featur}</li>)
            }
            </ol>
      
            <p className="text-base ">{details}</p>
            <button className='btn btn-secondary'>Select</button>
          </div>
        </div>
    );
};

export default Priceoption;