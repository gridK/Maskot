import React,  { useState , useEffect, useMemo} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import '../../Styles/maskot-styling.scss';
import HeaderView from '../Utilities/HeaderView';
import TimeSlotCard, {TimelineDetailCard, TimelineWithoutMaskDetection} from '../Utilities/TimeSlotCard';
import ImageView from '../Utilities/ImageView';
import CarouselControl from '../Utilities/CarouselControl';
import {DateTimeToFullString} from '../../Provider';
import {GetTimeLineInfo} from '../../UrlDict';
import fs from 'fs'
import {
    useParams
  } from "react-router-dom";


function TimeLine (){
    const  params  = useParams();
    var page = params.page
    var current_day_string = params.date.replaceAll("-","/");
    var currentday = params.date.split("-")
    var rearrange_day = currentday[2] +"-" + currentday[1] +"-"+ currentday[0]
    var new_date = new Date(rearrange_day)
    
    var new_date_string = DateTimeToFullString(new_date)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [CarouselNumber, setCarouselNumber] = useState({
        currentImage : 1,
        totalImages: 1
    });
    const [detectedImages, setDetectedImages] = useState([])
    const [detectedResult, setDetectedResult] = useState([])
    const [timelineInfo, setTimelineInfo] = useState({
        time: "",
        location: ""
    })
    const [additionalTimelineInfo, setAdditionalTimelineInfo] = useState([])


    function dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        var byteString = atob(dataURI.split(',')[1]);
    
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    
        // write the bytes of the string to an ArrayBuffer
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var _ia = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            _ia[i] = byteString.charCodeAt(i);
        }
    
        var dataView = new DataView(arrayBuffer);
        var blob = new Blob([dataView], { type: mimeString });
        return blob;
    }

    var searchImg = dataURItoBlob(localStorage.getItem("file"))
    const fetchAPI = () => {
        var bodyFormData = new FormData();
        bodyFormData.set('image',searchImg)
        console.log(searchImg)
        let params = {
            type: "main",
            data: {
                image: bodyFormData,
                date: current_day_string
            }
        }
        GetTimeLineInfo(params)
        .then(
            response =>{
                setItems(response.data)
                console.log(response.data)
                setIsLoaded(true)
            }
        )
    }

    const fetchDetectedImages = (detectedimages) => {
        let params = {
            type: "timeline-info",
            data: {
                detectedImageId: detectedimages
            }
        }
        console.log(detectedimages)
        GetTimeLineInfo(params)
        .then(
            response => {
                setAdditionalTimelineInfo(response.data.data)
                setDetectedResult(response.data.data.images)
                console.log("fetch detected images api")
                console.log(response.data.data)
                setDetectedImages(detectedimages)
                setCarouselNumber({
                    currentImage: 1,
                    totalImages: detectedimages.length
                })
            }
        )
    }

    function setDetectedImageList(detectedimages, time, location) {
        setTimelineInfo({
            time: time,
            location: location
        })
        fetchDetectedImages(detectedimages)
        
    }

    function setCarouselView(num) {
        setCarouselNumber(prev => {
            return ({...prev,
                currentImage: num
            })
        })
    }

    useEffect( () => {
        fetchAPI()
        console.log("fetch all apis")
    }, [])



    return (
        <>
        { isLoaded &&
        <Container fluid>
            { page === "day" ?
                <HeaderView targetedImg={URL.createObjectURL(searchImg)} title="Timeline"  date={new_date_string} backToPreviousPath="/main" backToPreviousText="Back to search" />
                :
                <HeaderView targetedImg={URL.createObjectURL(searchImg)} title="Timeline"  date={new_date_string} backToPreviousPath="/timeline/main" backToPreviousText="Back to insert photo" />
            }
            
            <h3 className="timeline-results">Found {items.data.length} Results</h3>
            <div className="horizontal-scroll-view">
                { items.data.map( (record, index) => 
                    <TimeSlotCard currentTimeLine={timelineInfo.time} setTimeLine={(detectedimageIds, time, location) => setDetectedImageList(detectedimageIds, time, location)} time={record.capturedTime} location={record.locationNameEn} detectedIds={record.detectedImageId}/>
                )
                }
            </div> 
            { detectedImages.length !== 0 &&
            <Row className="timeline-inspection-view" noGutters={true}>
                <Col lg={6} >
                    <div className="mx-auto d-flex justify-content-center">
                        <ImageView type="big" src={detectedResult[CarouselNumber.currentImage -1].imageUrl}/>
                    </div>
                    <CarouselControl setImgView={(num) => setCarouselView(num)} currentNum= {CarouselNumber.currentImage} totalNum= {CarouselNumber.totalImages}/>
                </Col>
                <Col lg={6}>
                    <TimelineDetailCard time={timelineInfo.time} location={timelineInfo.location} Maskvalue={additionalTimelineInfo.totalWithMask} UnMaskvalue={additionalTimelineInfo.totalWithoutMask}/>
                    <TimelineWithoutMaskDetection withOutMaskFaceCoord={additionalTimelineInfo} currentNum={CarouselNumber.currentImage}/>
                </Col>
            </Row>
            }
        </Container>
        }
        </>
    );
}

export default TimeLine;