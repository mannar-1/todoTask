import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TaskActive = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#6871EE"
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z"
      clipRule="evenodd"
    />
    <Path fill="#fff" d="m15.573 8.374 1.978 1.978-6.789 6.788-1.977-1.978z" />
    <Path fill="#F8D94F" d="m8.39 10.81 1.978 1.978-1.978 1.978-1.978-1.978z" />
  </Svg>
)
export default TaskActive
