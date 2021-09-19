import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    commonPageMoveAction,
    commonMainkeyAction
  } from "../reducers/action/commonAction";
import "./header.css"
function Header(props) {

    
    return (
        <>
        <header>
                <h1>
                    <a  href={() => false} onClick={() => { props.commonPageMoveAction(0); props.commonMainkeyAction(0);}}>
                    <div className="service-title">{props.actionInfo.commonTitle}</div>
                    </a>
                </h1>
                <div className="song-logo">
                   <a  href={() => false} onClick={() => { props.commonPageMoveAction(1);}}>
                      <div className="service-title">{props.actionInfo.commonSubtitle}</div>
                  </a>
               </div>
        </header>
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
  )(Header);
  