export interface ThemeBorders {
  [K: string]: string
}

export interface ThemeBorderStyles {
  [K: string]: string
}

export interface ThemeBorderWidths {
  [K: string]: string | number
}

export interface ThemeBreakpoints {
  [K: string]: string | null
}

export interface ThemeColors {
  [K: string]: string
}

export interface ThemeDurations {
  [K: string]: string
}

export interface ThemeTimings {
  [K: string]: string
}

export interface ThemeFonts {
  [K: string]: string
}

export interface ThemeFontSizes {
  [K: string]: string
}

export interface ThemeFontWeights {
  [K: string]: string
}

export interface ThemeLetterSpacings {
  [K: string]: string
}

export interface ThemeLineHeights {
  [K: string]: string
}

export interface ThemeRadii {
  [K: string]: string
}

export interface ThemeShadows {
  [K: string]: string
}

export interface ThemeSizes {
  [K: string]: string | number
}

export interface ThemeSpace {
  [K: string]: string | number
}

export interface ThemeOpacities {
  [K: string]: string | number
}

export interface ThemeTransitions {
  [K: string]: string
}

export interface ThemeZIndices {
  [K: string]: number
}

export interface Theme {
  breakpoints: ThemeBreakpoints
  borders?: ThemeBorders
  borderStyles?: ThemeBorderStyles
  borderWidths?: ThemeBorderWidths
  colors?: ThemeColors
  durations?: ThemeDurations
  fonts?: ThemeFonts
  fontSizes?: ThemeFontSizes
  fontWeights?: ThemeFontWeights
  letterSpacings?: ThemeLetterSpacings
  lineHeights?: ThemeLineHeights
  opacities?: ThemeOpacities
  radii?: ThemeRadii
  shadows?: ThemeShadows
  sizes?: ThemeSizes
  space?: ThemeSpace
  timings?: ThemeTimings
  transitions?: ThemeTransitions
  zIndices?: ThemeZIndices
}
