import { CSSProperties } from 'react'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    neutral10: CSSProperties['color']
    neutral30: CSSProperties['color']
    neutral50: CSSProperties['color']
    neutral70: CSSProperties['color']
    neutral80: CSSProperties['color']
    neutral90: CSSProperties['color']
    neutral95: CSSProperties['color']
    neutral100: CSSProperties['color']

    backgroundPrimary: CSSProperties['color']
  }
}
