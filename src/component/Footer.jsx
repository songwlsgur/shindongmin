import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    commonPageMoveAction,
    commonMainkeyAction
  } from "../reducers/action/commonAction";
import "./footer.css";
import btn_scroll_top from '../images/footer/btn_scroll.JPG';
function Footer(props) {
    const [scrollPosition, setSrollPosition] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    function handleScroll() {
        const position = window.pageYOffset
        setSrollPosition(position)
    }


    return (
        <>
         <footer id="footer">
         <div className="copyright">Shin dong min <br />ALL Right Reserved</div>
            <button id="top-btn" 
            className={scrollPosition > 0 ? "btnEntrance" : "btnExit"}
            style={scrollPosition > 0 ?  {display : "block"} : {display : "none"}}
            onClick={() => { window.scrollTo(0, 0); props.commonPageMoveAction(0); props.commonMainkeyAction(0); }}><img src={btn_scroll_top}  alt=""/></button>
            </footer>
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
          commonMainkeyAction
        },
        dispatch
      )
  )(Footer);
  