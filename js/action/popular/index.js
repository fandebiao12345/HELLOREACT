import Types from '../types'
import DataStore from '../../expand/dao/DataStore';

/**
 * 
 * @param {*} storeName 
 * @param {*} url 
 * @param {*} pageSize 
 */
export function onLoadPopularData(storeName, url, pageSize) {
  return dispatch => {
    dispatch({type: Types.LOAD_POPULAR_REFRESH, storeName})
    let dataStore = new DataStore()
    dataStore.fetchData(url) // 异步action与数据流
    .then(data => {
      handleData(dispatch, storeName, data, pageSize)
    })
    .catch(error => {
      dispatch({type: Types.POPULAR_FAIL, storeName, error})
    })
  }
}


export function onLoadMorePopular(storeName, pageIndex, pageSize, dataArray= [], callback) {

  return dispatch => {
    setTimeout(() => {
  
      if((pageIndex - 1) * pageSize >= dataArray.length){
        if(typeof callback == 'function'){
          callback('no more')
        }
        dispatch({
          type: Types.POPULAR_LOAD_MORE_FAIL,
          error:　'no more',
          storeName,
          pageIndex: --pageIndex,
          projectModes: dataArray
        })
      }else{
        let max = pageSize * pageIndex > dataArray.length ? dataArray.length : pageSize * pageIndex
        dispatch({
          type: Types.POPULAR_LOAD_MORE_SUCCESS,
          storeName,
          pageIndex,
          projectModes: dataArray.slice(0, max)
        })
      }
    }, 500)
  }
}

// function handleData(dispatch, storeName, data) {

//   dispatch({
//     type: Types.LOAD_POPULAR_SUCCESS,
//     items: data&&data.data.items,
//     storeName
//   })
// }
function handleData(dispatch, storeName, data, pageSize) {
  let fixItems = []
  if(data && data.data && data.data.items){
    fixItems = data.data.items
  }
  dispatch({
    type: Types.LOAD_POPULAR_SUCCESS,
    projectModes: pageSize > fixItems.length ? fixItems : fixItems.slice(0, pageSize),
    items: fixItems,
    storeName,
    pageIndex: 1
  })
}