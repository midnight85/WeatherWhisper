import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgArrowBack = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="m10.875 19.3-6.6-6.6a.877.877 0 0 1-.213-.325A1.107 1.107 0 0 1 4 12c0-.133.02-.258.063-.375a.877.877 0 0 1 .212-.325l6.6-6.6a.977.977 0 0 1 .688-.288.93.93 0 0 1 .712.288c.2.183.304.412.313.687a.93.93 0 0 1-.288.713L7.4 11h11.175c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713a.968.968 0 0 1-.713.287H7.4l4.9 4.9c.183.183.28.417.287.7a.87.87 0 0 1-.287.7c-.183.2-.417.3-.7.3a.988.988 0 0 1-.725-.3Z"
    />
  </Svg>
);
export default SvgArrowBack;
