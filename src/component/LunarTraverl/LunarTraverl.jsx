import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  commonPageMoveAction,
  commonSubtitleAction,
  commonMainkeyAction,
} from "../../reducers/action/commonAction";
import { useEffect } from "react";
import sample6 from "../../images/lunarTraver/sample_images_06.png";
import sample8 from "../../images/lunarTraver/sample_images_08.png";
import "../../css/total.css";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

function LunarTraverl(props) {
  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div id="intro">
            <div className="introContent">
              <a href={() => false}>
                <img src={sample6} alt="6번째 사진" />
              </a>
            </div>
            <div className="introContent">
              <a href={() => false}>
                <img src={sample8} alt="8번쨰 사진" />
              </a>
            </div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>

      {/* <div className="introContent">
              <img src={sample6} alt="test사진"/>
            </div>
            <div className="introContent">
              <img src={sample6} alt="test사진"/>
            </div>
            <div className="introContent">
              <img src={sample6} alt="test사진"/>
            </div> */}
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
)(LunarTraverl);
