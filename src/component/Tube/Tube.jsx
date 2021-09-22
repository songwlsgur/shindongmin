import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  commonPageMoveAction,
  commonSubtitleAction,
  commonMainkeyAction,
} from "../../reducers/action/commonAction";
import { useEffect } from "react";
import sample1 from "../../images/tube/sample_images_01.png";
import sample9 from "../../images/tube/sample_images_09.png";
import sample10 from "../../images/tube/sample_images_10.png";
import "../../css/total.css";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
function Tube(props) {
  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="content-exp index2">
            <p className="content-title mb-5">Tube Explanation</p>
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
            <img src={sample1} alt="sample1번 사진" />
            <img src={sample9} alt="sample9번 사진" />
            <img src={sample1} alt="sample1번 사진" />
          </div>
          <div className="content-exp index2">
            <p className="content-title mb-5">Tube Explanation</p>
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
          <div class="grid-container-two">
            <img src={sample1} alt="sample1번 사진" />
            <img src={sample10} alt="sample10번 사진" />
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
)(Tube);
