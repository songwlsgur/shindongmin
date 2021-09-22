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
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
function Triangle(props) {
  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="content-exp index2">
            <p className="content-title mb-5">Triangle Explanation</p>
            <div>
              Dongmin Shin is 29 years old. <br />
              I currently live in Seoul, Korea.
              <br />
              We will be running towards our future dreams.
              <br />
              Thank you so much for your support.
              <br />
            </div>
          </div>
          <div id="intro">
            <div className="introContent">
              <img src={sample3} alt="sample3 사진" />
            </div>
            <div className="introContent">
              <img src={sample3} alt="sample3 사진" />
            </div>
            <div className="introContent">
              <img src={sample3} alt="sample3 사진" />
            </div>
            <div className="introContent">
              <img src={sample3} alt="sample3 사진" />
            </div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
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
