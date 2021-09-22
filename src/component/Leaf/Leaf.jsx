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
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
function Leaf(props) {
  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="content-exp index2">
            <p className="content-title mb-5">Leaf Explanation</p>
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
          <div className="grid-container-three">
            <img src={sample2} alt="sample2번 사진" />
            <img src={sample2} alt="sample2번 사진" />
            <img src={sample2} alt="sample2번 사진" />
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
)(Leaf);
