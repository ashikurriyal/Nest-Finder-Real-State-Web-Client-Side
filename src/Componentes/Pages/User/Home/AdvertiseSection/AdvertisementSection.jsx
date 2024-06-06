import { useEffect, useState } from "react";
import AdvertiseCard from "./AdvertiseCard";


const AdvertisementSection = () => {

    const [add, setAdd] = useState([])
    useEffect(() => {
        fetch('/advertise.json')
        .then(res => res.json())
        .then(data => {
            setAdd(data)

        })
    },[])
    console.log(add)
    return (
        <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Advertisement Section</h1>
                <p className="text-xl font-normal">Discover our featured properties and find your dream home today. Browse through the latest listings and take advantage of the best deals on the market.</p>
            </div>

            <div className="grid grid-cols-4 justify-items-center gap-4">
                {
                    add.map((item, index) => <AdvertiseCard key={index} item={item}></AdvertiseCard>)
                }
            </div>

        </div>
    );
};

export default AdvertisementSection;