import Types from '../../action/types'


/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function onAction(state = {}, action) {
  switch (action.type) {
    case Types.LOAD_POPULAR_SUCCESS:
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          items: action.items, // 原始数据
          projectModes: action.projectModes,
          hideLoadingMore: false,
          isLoading: false,
          pageIndex: action.pageIndex
        }
      }
    case Types.LOAD_POPULAR_REFRESH:
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          hideLoadingMore: true,
          isLoading: true
        }
      }
    case Types.LOAD_POPULAR_FAIL:
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          isLoading: false
        }
      }
    case Types.POPULAR_LOAD_MORE_SUCCESS: // 上啦加载更多成功
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          projectModes: action.projectModes,
          hideLoadingMore: false,
          pageIndex: action.pageIndex
        }
      }
    case Types.POPULAR_LOAD_MORE_FAIL: // 上啦加载更多成功
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          hideLoadingMore: true,
          pageIndex: action.pageIndex
        }
      }
    default:

      return state
  }
}