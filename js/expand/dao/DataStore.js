import { AsyncStorage } from 'react-native'


export default class DataStore {
  fetchData(url) {
    return new Promise((resolve, reject) => {
      this.fetchLocalData(url).then((wrapData) => {
        if (wrapData && DataStore.checkTimestampValid(wrapData.timestamap)) {
          resolve(wrapData)
        } else {
          this.fetchNetData(url).then((data) => {
            
            resolve(this._wrapData(data))
          }).catch((error) => {
            reject(error)
          })
        }
      })
    }).catch(error => {
      this.fetchNetData(url).then(data => {
        resolve(this._wrapData(data))
      }).catch(error => {
        reject(error)
      })
    })
  }
  static checkTimestampValid(timestamap) {
    const currentDate = new Date()
    const targetDate = new Date()
    targetDate.setTime(timestamap)
    if (currentDate.getMonth() != targetDate.getMonth()) return false
    if (currentDate.getDate() != targetDate.getDate()) return false
    if (currentDate.getHours() != targetDate.getHours()) return false
    return true

  }
  saveData(url, data, callback) {
    if (!data || !url) return
    AsyncStorage.setItem(url, JSON.stringify(this._wrapData), callback)
  }

  fetchLocalData(url) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(url, (error, result) => {
        if (!error) {
          try {
            resolve(JSON.parse(result))
          } catch (e) {
            reject(e)
            console.error(e)
          }
        } else {
          reject(error)
          console.error(error)
        }
      })
    })
  }
  fetchNetData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            console.log(res)
            return res.json()
          }
          throw new Error('network error')
        })
        .then(resData => {
          this.saveData(url, resData)
          resolve(resData)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }
  _wrapData(data) {
    return { data, timestamap: new Date().getTime() }
  }
}