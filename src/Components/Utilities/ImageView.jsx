import React from 'react';
import { NavLink } from 'react-router-dom';


function ImageView(props) {
    
    function saveImgtoLocalStorage(src) {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        fetch(proxyUrl+src).then(function(response) {
            return response.blob();
        }).then(
            img => {
                const reader = new FileReader();
                reader.readAsDataURL(img);
                reader.onloadend = function() {
                    var base64data = reader.result;  
                    localStorage.setItem("file", base64data)
                }
            }
        )
       
    }
    if (props.date != undefined) {
        var new_date = props.date.replaceAll(" ","-");
        var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month_num = months.indexOf(new_date.split("-")[1])
        if (month_num > 9) {
            var result_date = new_date.split("-")[0] +"-"+month_num+"-"+new_date.split("-")[2]
        }else{
            result_date = new_date.split("-")[0] +"-0"+month_num+"-"+new_date.split("-")[2]
        }
        
        console.log(result_date)
    }
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
            <NavLink to={"/main/timeline/report/"+result_date+"/day"} className="small-img-view mx-auto d-flex justify-content-center"
                onClick={() => saveImgtoLocalStorage(props.src)}>
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