import Types from '../types'

export function onThemeChange(theme) {
  return {type: Types.THMEM_CHANGE, theme}
}
