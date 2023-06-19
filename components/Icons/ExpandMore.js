import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgExpandMore = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M12 14.95c-.133 0-.258-.02-.375-.063a.877.877 0 0 1-.325-.212L6.675 10.05a.892.892 0 0 1-.262-.687.977.977 0 0 1 .287-.688.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l3.9 3.9 3.925-3.925a.892.892 0 0 1 .688-.262.977.977 0 0 1 .687.287.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7l-4.6 4.6c-.1.1-.208.17-.325.212a1.106 1.106 0 0 1-.375.063Z"
    />
  </Svg>
);
export default SvgExpandMore;
