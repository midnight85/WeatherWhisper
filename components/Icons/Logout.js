import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgLogout = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M15.325 16.275a1.11 1.11 0 0 1-.275-.737c0-.276.092-.505.275-.688l1.85-1.85H10a.967.967 0 0 1-.713-.287A.968.968 0 0 1 9 12c0-.283.096-.52.287-.713A.967.967 0 0 1 10 11h7.175l-1.85-1.85c-.2-.2-.3-.438-.3-.713 0-.274.1-.512.3-.712.183-.2.413-.3.688-.3.274 0 .504.092.687.275l3.6 3.6c.1.1.17.208.212.325.042.117.063.242.063.375s-.02.258-.063.375a.877.877 0 0 1-.212.325l-3.6 3.6c-.217.217-.454.313-.712.287a1.054 1.054 0 0 1-.663-.312ZM5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h6c.283 0 .52.096.713.288.191.191.287.429.287.712s-.096.52-.287.713A.968.968 0 0 1 11 5H5v14h6c.283 0 .52.096.713.288.191.191.287.429.287.712s-.096.52-.287.712A.968.968 0 0 1 11 21H5Z"
    />
  </Svg>
);
export default SvgLogout;
