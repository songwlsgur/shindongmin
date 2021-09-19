import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    commonPageMoveAction,
    commonSubtitleAction,
    commonMainkeyAction
  } from "../../reducers/action/commonAction";
import { useEffect } from "react";
import sample6 from "../../images/lunarTraver/sample_images_06.png";
import "../../css/total.css";


function LunarTraverl(props) {


    return (
        <>
          <div className="tube-container-menu">
          <img src={sample6} alt="test사진"/>
          </div> 
          <div className="tube-container-menu">
          <img src={sample6} alt="test2사진"/>
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
  )(LunarTraverl);

