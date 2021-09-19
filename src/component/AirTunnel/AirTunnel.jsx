import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    commonPageMoveAction,
    commonSubtitleAction,
    commonMainkeyAction
  } from "../../reducers/action/commonAction";
import { useEffect } from "react";
import sample4 from "../../images/airTunnel/sample_images_04.png";
import "../../css/total.css";


function AirTunnel(props) {


    return (
        <>
          <div className="tube-container-menu">
          <img src={sample4} alt="test사진"/>
          </div> 
          <div className="tube-container-menu">
          <img src={sample4} alt="test2사진"/>
          </div> 
          <div className="tube-container-menu">
          <img src={sample4} alt="test2사진"/>
          </div> 
          <div className="tube-container-menu">
          <img src={sample4} alt="test2사진"/>
          </div> 
          <div className="tube-container-menu">
          <img src={sample4} alt="test2사진"/>
          </div> 
          <div className="tube-container-menu">
          <img src={sample4} alt="test2사진"/>
          </div> 
        </>
    )
}


export default connect(
    (reducerState) => ({
        actionInfo: reducerState.commonReducer,
    }),
    (dispatch) =>
      bindActionCreators(
        {
            commonPageMoveAction,
            commonSubtitleAction,
            commonMainkeyAction
        },
        dispatch
      )
  )(AirTunnel);

