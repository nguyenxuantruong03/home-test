import Image from "next/image";
import './index.scss'
interface CardPopularProps{
url: string;
label: string;
}
const Cardpopular:React.FC<CardPopularProps> = ({url,label}) => {
    return ( 
        <div className="card-screen">
            <div className="card-popular">
                <Image 
                src={url}
                alt="Image"
                fill
                className="card-popular-image"
                />
                <p className="text-popular">{label}</p>
            </div>
         </div>

     );
}
 
export default Cardpopular;