import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgFahrenheit = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M8 21c-1.383 0-2.563-.488-3.537-1.462C3.487 18.562 3 17.383 3 16c0-.8.175-1.546.525-2.238.35-.691.842-1.279 1.475-1.762V6c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 8 3c.833 0 1.542.292 2.125.875S11 5.167 11 6v6a5.082 5.082 0 0 1 1.475 1.762c.35.692.525 1.438.525 2.238 0 1.383-.488 2.563-1.463 3.538C10.563 20.512 9.383 21 8 21Zm-3-5h6c0-.483-.104-.933-.313-1.35A2.908 2.908 0 0 0 9.8 13.6L9 13V6a.968.968 0 0 0-.287-.713A.968.968 0 0 0 8 5a.968.968 0 0 0-.713.287A.968.968 0 0 0 7 6v7l-.8.6c-.383.283-.68.633-.888 1.05A2.977 2.977 0 0 0 5 16ZM17.5 12a.5.5 0 0 1-.5-.5V4a1 1 0 0 1 1-1h3.511a.489.489 0 1 1 0 .978H18V7h2.5a.5.5 0 0 1 0 1H18v3.5a.5.5 0 0 1-.5.5Z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.5 4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-1.5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFahrenheit;