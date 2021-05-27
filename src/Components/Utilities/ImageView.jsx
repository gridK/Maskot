import React from 'react';
import { NavLink } from 'react-router-dom';


function ImageView(props) {
    return (
        <>
        { props.type === "big" &&
            <img src={props.src} alt="detected" className="big-img-view">

            </img>
        }
        { props.type === "small" &&
            <img src={props.src} alt="detected" className="small-img-view">

            </img>
        }
        { props.type === "small-result" &&
            <>
            <NavLink to="/main/timeline/report" className="small-img-view">
                <img src={props.src} alt="detected" >

                </img>
                <div class="img-result-overlay "></div>
                <img src="/img/Icon metro-search.svg" className="img-result-overlay-icon" alt="see"></img>
            </NavLink>
            </>
        }
        { props.type === "more-img" &&
            <div className="more-img-background ">
                <h2> +{props.imgNum} </h2>
            </div>
        }
        </>
    );
}

export default ImageView;