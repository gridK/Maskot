import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import HeaderView from '../Utilities/HeaderView';
import FilterDropDown from '../Utilities/FilterDropDown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MiniViewBtn from '../Utilities/MiniViewBtn';
import {DateTimeToLocaleDateStringLeadZero} from '../../Provider';

function MainTimeLine(){
    var currentDate = new Date()
    const [ dropClass, setClass ] =  useState("")
    const [ previewUrl, setPreviewUrl] = useState("");
    const [ Selecteddate , setSelectedDate] = useState(DateTimeToLocaleDateStringLeadZero(currentDate))
    var DateSelectList = []
    
    for ( var i = 0; i <= 7; i++) {
        DateSelectList.push(DateTimeToLocaleDateStringLeadZero(currentDate))
        var temp_date = currentDate.getDate()
        temp_date = temp_date - 1 
        currentDate.setDate(temp_date)
    }
    function dropHandler(ev) {
        console.log('File(s) dropped');
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        if (ev.dataTransfer.items) {
          // Use DataTransferItemList interface to access the file(s)
          for (var i = 0; i < ev.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            if (ev.dataTransfer.items[i].kind === 'file') {
              var file = ev.dataTransfer.items[i].getAsFile();
              console.log('... file[' + i + '].name = ' + file.name);
              setPreviewUrl(URL.createObjectURL(file));
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = function() {
                var base64data = reader.result;                
                console.log(base64data);
                localStorage.setItem("file", base64data)
              }
              
            }
          }
        } else {
          // Use DataTransfer interface to access the file(s)
          for (var i = 0; i < ev.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
            
          }
        }
    }
    function dragOverHandler(ev) {
        console.log('File(s) in drop zone');
        setClass("filter-added")
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        
    }

    function dragLeaveHandler(ev) {
        ev.preventDefault();
        setClass("")
    }

    function setDateFilter(value) {
      setSelectedDate(value)
      console.log(value)
    }
    return(
        <Container fluid> 
            <h1 className="main-title">Timeline</h1>
            <h1 className="main-sub-title">Insert Photo</h1>
            <h5 className="main-description-text">Upload a straight face photo of person to generate a timeline</h5>
            <Row>
                <FilterDropDown setFilter={value => setDateFilter(value)} selectList={DateSelectList} type="filter" filterName="Date"/>
            </Row>
            <div className={"my-5 ml-2 upload-file-area"} onDrop={dropHandler} onDragOver={dragOverHandler} onDragLeave={dragLeaveHandler}>
                
                <img  className={"background-img-drop-file "+ dropClass} src="/img/Rectangle.jpg" alt="drop-file-area" width="98%"></img>
                <div className="img-drag-n-drop-one">
                    <img src="/img/icons8-photo-gallery-96.png" alt="drag-n-drop-file"/>
                </div>
                <div className="img-drag-n-drop-two">
                  <img src="/img/Drag and Drop.png" alt="drag-n-drop-file" ></img>
                </div>
                { previewUrl !== "" &&
                  <img className={"drop-img"} src={previewUrl} alt="drop-file-area" height="260px"></img>
                }
            </div>

            <Row className="main-timeline-footer justify-content-end mr-3">
                <MiniViewBtn type="search-redirect" redirectPath={"/timeline/report/"+Selecteddate.replaceAll( "/" ,"-")}/>
            </Row>
        </Container>
    );
}

export default MainTimeLine;