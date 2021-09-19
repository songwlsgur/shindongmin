import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    commonPageMoveAction,
    commonSubtitleAction,
    commonMainkeyAction
  } from "../../reducers/action/commonAction";
import { useEffect } from "react";
import sample5 from "../../images/artWork/sample_images_05.png";
import "../../css/total.css";


function ArtWork(props) {


    return (
        <>
          <div className="tube-container-menu">
          <img src={sample5} alt="test사진"/>
          </div> 
          <div className="tube-container-menu">
          <img src={sample5} alt="test2사진"/>
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
  )(ArtWork);

