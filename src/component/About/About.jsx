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
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
function About(props) {
  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="content-exp index2">
            <p className="content-title mb-5">About Explanation</p>
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
          <div className="mainContent">
            <div id="intro">
              <div className="introContent">
                <img src={sample7} alt="sample7 사진" />
              </div>
              <div className="introContent">
                <img src={sample7} alt="sample7 사진" />
              </div>
              <div className="introContent">
                <img src={sample7} alt="sample7 사진" />
              </div>
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
)(About);
