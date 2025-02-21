import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Delete = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="rgb(104, 113, 238)"
      fillRule="evenodd"
      d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill="rgb(104, 113, 238)"
      fillRule="evenodd"
      d="M10 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1h-4Zm7 2V4a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H5a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a1 1 0 0 0-1-1h-2ZM6 7v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7H6Z"
      clipRule="evenodd"
    />
    <Path
      fill="rgb(104, 113, 238)"
      fillRule="evenodd"
      d="M10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1ZM14 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Delete;

