import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgChevronRight = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M8.7 17.3a.948.948 0 0 1-.275-.7c0-.283.091-.517.275-.7l3.9-3.9-3.9-3.9a.948.948 0 0 1-.275-.7c0-.283.091-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .516.092.7.275l4.6 4.6c.1.1.17.208.212.325.042.117.063.242.063.375s-.021.258-.063.375a.877.877 0 0 1-.212.325l-4.6 4.6a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275Z"
    />
  </Svg>
);
export default SvgChevronRight;
