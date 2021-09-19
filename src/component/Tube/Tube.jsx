import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    commonPageMoveAction,
    commonSubtitleAction,
    commonMainkeyAction
  } from "../../reducers/action/commonAction";
import { useEffect } from "react";
import sample1 from "../../images/tube/sample_images_01.png";
import "../../css/total.css";


function Tube(props) {


    return (
        <>
          <div className="tube-container-menu">
          <img src={sample1} alt="test사진"/>
          </div> 
          <div className="tube-container-menu">
          <img src={sample1} alt="test2사진"/>
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
  )(Tube);

