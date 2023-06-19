import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHomeFilled = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M6 21c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 19v-9a1.986 1.986 0 0 1 .8-1.6l6-4.5a2.11 2.11 0 0 1 .575-.3c.2-.067.408-.1.625-.1.217 0 .425.033.625.1s.392.167.575.3l6 4.5A1.985 1.985 0 0 1 20 10v9c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 21h-5v-6h-2v6H6Z"
    />
  </Svg>
);
export default SvgHomeFilled;
