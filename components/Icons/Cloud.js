import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCloud = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M6.5 20c-1.517 0-2.813-.525-3.888-1.575C1.537 17.375 1 16.092 1 14.575c0-1.3.392-2.458 1.175-3.475S3.983 9.433 5.25 9.15c.417-1.533 1.25-2.775 2.5-3.725C9 4.475 10.417 4 12 4c1.95 0 3.604.68 4.962 2.037C18.322 7.396 19 9.05 19 11c1.15.133 2.104.63 2.863 1.488A4.407 4.407 0 0 1 23 15.5c0 1.25-.438 2.313-1.313 3.188S19.75 20 18.5 20h-12Zm0-2h12c.7 0 1.292-.242 1.775-.725.483-.483.725-1.075.725-1.775s-.242-1.292-.725-1.775C19.792 13.242 19.2 13 18.5 13H17v-2c0-1.383-.488-2.563-1.463-3.537C14.563 6.487 13.383 6 12 6s-2.563.487-3.537 1.463C7.488 8.437 7 9.617 7 11h-.5c-.967 0-1.792.342-2.475 1.025A3.372 3.372 0 0 0 3 14.5c0 .967.342 1.792 1.025 2.475A3.372 3.372 0 0 0 6.5 18Z"
    />
  </Svg>
);
export default SvgCloud;
