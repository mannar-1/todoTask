import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MapDefault = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#464963"
      fillRule="evenodd"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z"
      clipRule="evenodd"
    />
    <Path
      fill="#464963"
      fillRule="evenodd"
      d="M16.947 7.053a1 1 0 0 1 .242 1.023l-2.12 6.36a1 1 0 0 1-.633.633l-6.36 2.12a1 1 0 0 1-1.265-1.265l2.12-6.36a1 1 0 0 1 .633-.633l6.36-2.12a1 1 0 0 1 1.023.242Zm-6.276 3.617L9.34 14.66l3.989-1.33 1.329-3.988-3.988 1.33Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default MapDefault
