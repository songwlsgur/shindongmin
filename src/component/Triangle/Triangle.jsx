import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  commonPageMoveAction,
  commonSubtitleAction,
  commonMainkeyAction,
} from "../../reducers/action/commonAction";
import { useEffect } from "react";
import sample3 from "../../images/triangle/sample_images_03.png";
import "../../css/total.css";

function Triangle(props) {
  return (
    <>
      <div id="intro">
        <div className="introContent">
          <img src={sample3} alt="test사진" />
        </div>
        <div className="introContent">
          <img src={sample3} alt="test사진" />
        </div>
        <div className="introContent">
          <img src={sample3} alt="test사진" />
        </div>
        <div className="introContent">
          <img src={sample3} alt="test사진" />
        </div>
      </div>
    </>
  );
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
        commonMainkeyAction,
      },
      dispatch
    )
)(Triangle);
