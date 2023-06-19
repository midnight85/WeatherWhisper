import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgFolder = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M4 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h5.175a1.975 1.975 0 0 1 1.4.575L12 6h8c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v10c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Z"
    />
  </Svg>
);
export default SvgFolder;
