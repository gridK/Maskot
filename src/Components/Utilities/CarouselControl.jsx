import React from 'react';
import { Row } from 'react-bootstrap';
import '../../Styles/maskot-styling.scss';

function CarouselControl(){
    return(
        <div className="customed-carousel-control-view">
            <img className="customed-carousel-controller-prev" src="/img/Icon ionic-ios-arrow-dropleft-circle.svg" alt="previous" ></img>
            <div className="customed-carousel-control-panel">
                <p> 1/4 </p>
            </div>
            <img className="customed-carousel-controller-next" src="img/Icon ionic-ios-arrow-dropleft-circle.svg" alt="next"></img>
        </div>
    );
}

export default CarouselControl;