import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TaskDefault = (props: SvgProps) => (
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
      d="m15.573 8.374 1.978 1.978-6.789 6.788-1.977-1.978zM8.39 10.81l1.978 1.978-1.978 1.978-1.978-1.978z"
    />
  </Svg>
)
export default TaskDefault
