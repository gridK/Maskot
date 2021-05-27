import React from 'react';
import { Row } from 'react-bootstrap';
import '../../Styles/maskot-styling.scss';

function CarouselControl(props){
    function nextView(){
        props.setImgView(props.currentNum + 1)
    }
    function previousView(){
        props.setImgView(props.currentNum - 1)
    }
    return(
        <div className="customed-carousel-control-view">
        { props.currentNum !== 1 ?
            <img 
                className="customed-carousel-controller-prev" 
                src="/img/Icon ionic-ios-arrow-dropleft-circle.svg" 
                alt="previous" 
                onClick={() => previousView()}
            ></img>
            :
            <img 
                className="customed-carousel-controller-prev disable" 
                src="/img/Icon ionic-ios-arrow-left-disable.svg" 
                alt="previous" 
            ></img>
        }
            <div className="customed-carousel-control-panel">
                <p> {props.currentNum}/{props.totalNum} </p>
            </div>
            { props.currentNum !== props.totalNum ?
                <img 
                    className="customed-carousel-controller-next" 
                    src="/img/Icon ionic-ios-arrow-dropleft-circle.svg" 
                    alt="next"
                    onClick={() => nextView()}>
                </img>
                :
                <img 
                    className="customed-carousel-controller-next disable" 
                    src="/img/Icon ionic-ios-arrow-dropright-disable (2).svg" 
                    alt="next">
                </img>
            }
        </div>
    );
}

export default CarouselControl;