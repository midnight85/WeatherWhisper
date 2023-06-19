import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCheckBoxChecked = props => (
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
      d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm5.6 10.4-2.15-2.15a.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275.948.948 0 0 0-.276.7c0 .283.092.517.275.7L9.9 15.5c.2.2.434.3.7.3.267 0 .5-.1.7-.3l5.65-5.65a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275L10.6 13.4Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCheckBoxChecked;
