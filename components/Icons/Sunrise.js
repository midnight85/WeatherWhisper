import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSunrise = props => (
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
      d="M14.122 7.536 13 6.414V12a1 1 0 0 1-2 0V6.414L9.88 7.536A1 1 0 1 1 8.465 6.12l2.824-2.824a.995.995 0 0 1 1.08-.228c.123.05.239.124.338.224l2.829 2.828a1 1 0 0 1-1.414 1.415Zm-8.915 4.257a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414l-2-2Zm15 1.414a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 1.414 1.414l2-2ZM7.1 19H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-2.1a5.002 5.002 0 0 0-9.8 0Zm2.07 0h5.66a3.001 3.001 0 0 0-5.66 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSunrise;
