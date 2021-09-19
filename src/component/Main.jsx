import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { commonPageMoveAction } from "../reducers/action/commonAction";
import IndexCheck from "./IndexCheck/IndexCheck";
import Header from './Header';
import Footer from './Footer';
import About from './About/About';
function Main(props) {


    return (
        <>
              <Header></Header>
             {props.actionInfo.commonPage === 0 ? (
                <IndexCheck></IndexCheck>
              ): props.actionInfo.commonPage === 1 ? (
                <About></About>
              ): null}
            {
              <Footer></Footer>
            }
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
        },
        dispatch
      )
  )(Main);