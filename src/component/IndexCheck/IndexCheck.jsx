import React, { useState, useMemo, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  commonPageMoveAction,
  commonSubtitleAction,
  commonMainkeyAction,
} from "../../reducers/action/commonAction";
import "./indexCheck.css";
import Tube from "../Tube/Tube";
import Leaf from "../Leaf/Leaf";
import Triangle from "../Triangle/Triangle";
import AirTunnel from "../AirTunnel/AirTunnel";
import ArtWork from "../ArtWork/ArtWork";
import LunarTraverl from "../LunarTraverl/LunarTraverl";

function IndexCheck(props) {
  return (
    <>
      {props.actionInfo.commonMainKey === 0 ? (
        <div className="mainContent">
          <div className="content-exp index2">
            <p className="content-title mb-5">Personal</p>
            <a
              href={() => false}
              onClick={() => {
                props.commonMainkeyAction(1);
              }}
            >
              <p className="content-title mb-5">1.tube</p>
            </a>
            <a
              href={() => false}
              onClick={() => {
                props.commonMainkeyAction(2);
              }}
            >
              <p className="content-title mb-5">2.leaf</p>
            </a>
            <a
              href={() => false}
              onClick={() => {
                props.commonMainkeyAction(3);
              }}
            >
               <p className="content-title mb-5">3.triangle</p>
            </a>
            <a
              href={() => false}
              onClick={() => {
                props.commonMainkeyAction(4);
              }}
            >
              <p className="content-title mb-5">4.air tunnel</p>
            </a>
          </div>
          <div className="content-exp index2">
            <p className="content-title mb-5">Team</p>
            <a
              href={() => false}
              onClick={() => {
                props.commonMainkeyAction(5);
              }}
            >
            <p className="content-title mb-5">5.airwork</p>
            </a>
            <a
              href={() => false}
              onClick={() => {
                props.commonMainkeyAction(6);
              }}
            >
            <p className="content-title mb-5">6.lunar travel</p>
            </a>
           
          </div>
        </div>
      ) : (
        <div className="mainContent">
          {props.actionInfo.commonMainKey === 1 ? (
            <Tube></Tube>
          ) : props.actionInfo.commonMainKey === 2 ? (
            <Leaf></Leaf>
          ) : props.actionInfo.commonMainKey === 3 ? (
            <Triangle></Triangle>
          ) : props.actionInfo.commonMainKey === 4 ? (
              <AirTunnel></AirTunnel>
          ) : props.actionInfo.commonMainKey === 5 ? (
            <ArtWork></ArtWork>
          ) : props.actionInfo.commonMainKey === 6 ? (
              <LunarTraverl></LunarTraverl>    
          ) : null}
        </div>
      )}
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
)(IndexCheck);
