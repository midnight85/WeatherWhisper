import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgArrowInsert = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M8 8.4V16c0 .283-.096.52-.287.712A.967.967 0 0 1 7 17a.967.967 0 0 1-.713-.288A.968.968 0 0 1 6 16V6c0-.283.096-.52.287-.713A.968.968 0 0 1 7 5h10c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.713A.968.968 0 0 1 17 7H9.4l8.9 8.9a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275L8 8.4Z"
    />
  </Svg>
);
export default SvgArrowInsert;
