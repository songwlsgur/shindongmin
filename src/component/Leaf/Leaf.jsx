import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  commonPageMoveAction,
  commonSubtitleAction,
  commonMainkeyAction,
} from "../../reducers/action/commonAction";
import { useEffect } from "react";
import sample2 from "../../images/leaf/sample_images_02.png";
import "../../css/total.css";

function Leaf(props) {
  return (
    <>
      <div id="intro">
        <div className="introContent">
          <img src={sample2} alt="test사진" />
        </div>
        <div className="introContent">
          <img src={sample2} alt="test사진" />
        </div>
        <div className="introContent">
          <img src={sample2} alt="test사진" />
        </div>
        <div className="introContent">
          <img src={sample2} alt="test사진" />
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
)(Leaf);
