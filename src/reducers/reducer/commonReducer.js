import { COMMON_PAGE_MOVE,COMMON_TITLE,COMMON_SUBTITLE,COMMON_MAIN_KEY } from "../action/commonAction";
  import produce from "immer";

  const initialState = {
    commonPage: 0,
    loadPagesLoading: false,
    loadPagesDone: false,

    commonSubtitle: "About",
    loadSubtitleLoading: false,
    loadSubtitleDone: false,

    commonTitle: "dongminshin",
    loadTitleLoading: false,
    loadTitleDone: false,

    commonMainKey: 0,
    loadcommonMainKeyLoading: false,
    loadcommonMainKeyDone: false,
  
  };
  
  export const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
      switch (action.type) {
        case COMMON_PAGE_MOVE:
          draft.loadPagesLoading = true;
          draft.loadPagesDone = true;
          draft.commonPage = action.page;
          break;
        case COMMON_TITLE:
          draft.loadTitleLoading = true;
          draft.loadTitleDone = true;
          draft.commonTitle = action.title;
          break;
        case COMMON_SUBTITLE:
            draft.loadSubtitleLoading = true;
            draft.loadSubtitleDone = true;
            draft.commonSubtitle = action.subtitle;
            break;
        case COMMON_MAIN_KEY:
          draft.loadcommonMainKeyLoading = true;
          draft.loadcommonMainKeyDone = true;
          draft.commonMainKey = action.mainKey;
          break;
        default:
          return state;
      }
    });
  };
  
  export default reducer;