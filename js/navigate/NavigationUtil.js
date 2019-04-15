

export default class NavigationUtil {
  /**
   * 跳转到指定页面
   * @param {*} params 
   * @param {*} page 
   */
  static goPage(params){
    const {navigation, page} = params
    if(!navigation){
      return console.log('NavigationUtil.navigation can not be null')
    }
    navigation.navigate(page, {...params})
  }
  /**
   * 返回上一页
   * @param {*} params 
   */
  static resetGoBack(params) {
    const {navigation} = params
    navigation.goBack()
  }
  /**
   * 
   * @param {*} params 
   */
  static resetToHomePage(params) {
    const {navigation} = params
    navigation.navigate('Main')
  }
}