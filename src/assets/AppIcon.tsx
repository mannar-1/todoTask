import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={180}
    height={180}
    fill="none"
    {...props}
  >
    <Path fill="#6871EE" d="M180 0H0v180h180V0Z" />
    <Path
      fill="#fff"
      d="m150.735 70.457-21.56-21.561-74 74 21.56 21.56 74-74Z"
    />
    <Path
      fill="#F8D94F"
      d="m72.424 97.023-21.56-21.561-21.562 21.56 21.561 21.562 21.561-21.561Z"
    />
  </Svg>
)
export default SvgComponent
