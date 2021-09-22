import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  commonPageMoveAction,
  commonSubtitleAction,
  commonMainkeyAction,
} from "../../reducers/action/commonAction";
import { useEffect } from "react";
import sample7 from "../../images/sample_images_07.png";
import "../../css/total.css";
import "../IndexCheck/indexCheck.css";
function About(props) {
  return (
    <>
      <div className="mainContent">
        <div id="intro">
          <div className="introContent">
            <img src={sample7} alt="test사진" />
          </div>
          <div className="introContent">
            <img src={sample7} alt="test사진" />
          </div>
          <div className="introContent">
            <img src={sample7} alt="test사진" />
          </div>
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
)(About);
