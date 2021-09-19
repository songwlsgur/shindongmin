export const COMMON_PAGE_MOVE = "COMMON_PAGE_MOVE";
export const COMMON_TITLE = "COMMON_TITLE";
export const COMMON_SUBTITLE = "COMMON_SUBTITLE";
export const COMMON_MAIN_KEY = "COMMON_MAIN_KEY";

export const commonPageMoveAction = (page) => ({
    type: COMMON_PAGE_MOVE,
    page,
  });
export const commonTitleAction = (title) => ({
  type: COMMON_TITLE,
  title,
});

export const commonSubtitleAction = (subtitle) => ({
  type: COMMON_SUBTITLE,
  subtitle,
});

export const commonMainkeyAction = (mainKey) => ({
  type: COMMON_MAIN_KEY,
  mainKey,
});