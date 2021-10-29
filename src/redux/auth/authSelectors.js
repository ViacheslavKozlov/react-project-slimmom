export const getIsAuth = (state) => state.authData?.isAuthIn;
export const getRefreshToken = (state) => state.authData.userInfo.refreshToken;
export const getSid = (state) => state.authData.userInfo.sid;
