import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgEdit = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2 1.4-1.4a1.92 1.92 0 0 1 1.413-.575c.558 0 1.029.192 1.412.575l1.4 1.4c.383.383.583.846.6 1.388a1.807 1.807 0 0 1-.55 1.387L19.3 8.925ZM4 21a.967.967 0 0 1-.712-.288A.968.968 0 0 1 3 20v-2.825c0-.133.025-.262.075-.387a.999.999 0 0 1 .225-.338l10.3-10.3 4.25 4.25-10.3 10.3c-.1.1-.212.175-.337.225-.125.05-.255.075-.388.075H4ZM14.325 9.675l-.7-.7 1.4 1.4-.7-.7Z"
    />
  </Svg>
);
export default SvgEdit;
