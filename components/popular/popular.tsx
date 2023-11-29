import './popular.scss'
import HeadingDescription from '../uis/Hed-Des';
import Cardpopular from '../uis/card-popular';
const PopularDestination = () => {
    return (  
        <div className="screen-popular">
            <div className='heading-popular'>
                <HeadingDescription heading='Popular Destinations' description='World best tourist destinations'/>
            </div>
            <div className='content-popular'>
                <Cardpopular url="/images/tokyo-popular.jpg" label='Tokyo'/>
                <Cardpopular url="/images/seoul-popular.jpg" label='Seoul'/>
                <Cardpopular url="/images/paris-popular.jpg" label='Paris'/>
                <Cardpopular url="/images/london-popular.jpg" label='London'/>
            </div>
        </div>
    );
}
 
export default PopularDestination;