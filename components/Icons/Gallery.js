import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgGallery = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h14c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21H5Zm0-2h14V5H5v14Zm2-2h10c.2 0 .35-.092.45-.275a.44.44 0 0 0-.05-.525l-2.75-3.675a.475.475 0 0 0-.4-.2c-.167 0-.3.067-.4.2L11.25 16 9.4 13.525a.475.475 0 0 0-.4-.2c-.167 0-.3.067-.4.2l-2 2.675a.44.44 0 0 0-.05.525c.1.183.25.275.45.275Z"
    />
  </Svg>
);
export default SvgGallery;
