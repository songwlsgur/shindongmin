import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  commonPageMoveAction,
  commonSubtitleAction,
  commonMainkeyAction,
} from "../../reducers/action/commonAction";
import { useEffect } from "react";
import sample4 from "../../images/airTunnel/sample_images_04.png";
import "../../css/total.css";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

function AirTunnel(props) {
  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="content-exp index2">
            <p className="content-title mb-5">Air Tunnel Explanation</p>
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
              <img src={sample4} alt="sample4 사진" />
            </div>
            <div className="introContent">
              <img src={sample4} alt="sample4 사진" />
            </div>
            <div className="introContent">
              <img src={sample4} alt="sample4 사진" />
            </div>
            <div className="introContent">
              <img src={sample4} alt="sample4 사진" />
            </div>
            <div className="introContent">
              <img src={sample4} alt="sample4 사진" />
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
)(AirTunnel);
