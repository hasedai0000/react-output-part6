/**
 * ベースPATH
 * @type {string}
 */
export const BASE_PATH = "/react-output-part6";

/**
 * リンク先一覧
 * 遷移先定義の際に使用
 * @type {{ TOP: string, DETAIL: string, CREATE: string, EDIT: string }}
 */
export const NAVIGATION_LIST = {
  TOP: `${BASE_PATH}/`,
  DETAIL: `${BASE_PATH}/detail/:id`,
  CREATE: `${BASE_PATH}/create`,
  EDIT: `${BASE_PATH}/edit/:id`,
};

/**
 * パス一覧
 * 画面遷移時の使用
 * @type {{ TOP: string, DETAIL: string, CREATE: string, EDIT: string }}
 */
export const NAVIGATION_PATH = {
  TOP: `${BASE_PATH}/`,
  DETAIL: `${BASE_PATH}/detail/`,
  CREATE: `${BASE_PATH}/create`,
  EDIT: `${BASE_PATH}/edit/`,
};
