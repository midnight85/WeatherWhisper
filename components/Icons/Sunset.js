import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSunset = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.879 8.464 11 9.586V4a1 1 0 1 1 2 0v5.586l1.122-1.122a1 1 0 1 1 1.414 1.415l-2.824 2.824a1.038 1.038 0 0 1-.316.216.998.998 0 0 1-1.103-.212L8.465 9.88a1 1 0 0 1 1.414-1.415Zm-4.672 3.329a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414l-2-2Zm15 1.414a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 1.414 1.414l2-2ZM7.1 19H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-2.1a5.002 5.002 0 0 0-9.8 0Zm2.07 0h5.66a3.001 3.001 0 0 0-5.66 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSunset;
