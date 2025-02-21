import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Edit = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="rgb(104, 113, 238)"
      fillRule="evenodd"
      d="M19 3.171a1.829 1.829 0 0 0-1.293.536L4.395 17.019l-.97 3.556 3.556-.97L20.293 6.293A1.829 1.829 0 0 0 19 3.17Zm-1.465-1.708a3.829 3.829 0 0 1 4.172 6.244l-13.5 13.5a1 1 0 0 1-.444.258l-5.5 1.5a1 1 0 0 1-1.228-1.228l1.5-5.5a1 1 0 0 1 .258-.444l13.5-13.5a3.829 3.829 0 0 1 1.242-.83Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Edit;

