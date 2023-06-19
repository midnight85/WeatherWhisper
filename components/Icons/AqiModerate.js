import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgAqiModerate = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M15.5 11c.433 0 .792-.142 1.075-.425.283-.283.425-.642.425-1.075 0-.433-.142-.792-.425-1.075C16.292 8.142 15.933 8 15.5 8c-.433 0-.792.142-1.075.425-.283.283-.425.642-.425 1.075 0 .433.142.792.425 1.075.283.283.642.425 1.075.425Zm-7 0c.433 0 .792-.142 1.075-.425.283-.283.425-.642.425-1.075 0-.433-.142-.792-.425-1.075C9.292 8.142 8.933 8 8.5 8c-.433 0-.792.142-1.075.425C7.142 8.708 7 9.067 7 9.5c0 .433.142.792.425 1.075.283.283.642.425 1.075.425Zm1.25 4.5h4.5a.728.728 0 0 0 .75-.75.728.728 0 0 0-.75-.75h-4.5a.728.728 0 0 0-.75.75.728.728 0 0 0 .75.75ZM12 22a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.099 10.099 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 12 22Zm0-2c2.217 0 4.104-.78 5.663-2.337C19.22 16.104 20 14.217 20 12s-.78-4.104-2.337-5.662C16.104 4.779 14.217 4 12 4s-4.104.78-5.662 2.338C4.779 7.896 4 9.783 4 12s.78 4.104 2.338 5.663C7.896 19.22 9.783 20 12 20Z"
    />
  </Svg>
);
export default SvgAqiModerate;
