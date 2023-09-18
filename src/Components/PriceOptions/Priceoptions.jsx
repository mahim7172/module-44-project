import { useEffect, useState } from "react";
import Priceoption from "../PriceOption/Priceoption";


const Priceoptions = () => {
    const [value, setValue]=useState([])
    useEffect(()=>{
        fetch('Data.json')
        .then(res=>res.json())
        .then(data=>setValue(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
            {
                value.map(option=> <Priceoption key={option.id} option={option}></Priceoption>)
            }
        </div>
    );
};

export default Priceoptions;