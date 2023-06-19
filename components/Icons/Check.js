import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCheck = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M9.55 17.575c-.133 0-.258-.02-.375-.063a.878.878 0 0 1-.325-.212L4.55 13c-.183-.183-.27-.42-.262-.713.008-.291.104-.529.287-.712a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275L9.55 15.15l8.475-8.475c.184-.183.421-.275.713-.275.291 0 .529.092.712.275.184.183.275.42.275.712s-.091.53-.275.713l-9.2 9.2c-.1.1-.208.17-.325.212a1.106 1.106 0 0 1-.375.063Z"
    />
  </Svg>
);
export default SvgCheck;
