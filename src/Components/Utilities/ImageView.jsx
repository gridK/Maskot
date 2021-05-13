import React from 'react';


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
        </>
    );
}

export default ImageView;