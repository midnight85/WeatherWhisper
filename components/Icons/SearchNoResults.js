import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSearchNoResults = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="m18.9 20.3-5.6-5.6A6.096 6.096 0 0 1 9.5 16c-1.817 0-3.354-.63-4.612-1.887C3.629 12.854 3 11.317 3 9.5c0-1.817.63-3.354 1.888-4.612C6.146 3.629 7.683 3 9.5 3c1.817 0 3.354.63 4.613 1.888C15.37 6.146 16 7.683 16 9.5a6.096 6.096 0 0 1-1.3 3.8l5.625 5.625c.183.183.27.412.262.688a.977.977 0 0 1-.287.687.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275ZM9.5 14c1.25 0 2.313-.438 3.188-1.313C13.562 11.813 14 10.75 14 9.5c0-1.25-.438-2.313-1.313-3.188C11.813 5.438 10.75 5 9.5 5c-1.25 0-2.313.438-3.188 1.313S5 8.25 5 9.5c0 1.25.438 2.313 1.313 3.188C7.188 13.562 8.25 14 9.5 14Z"
    />
    <Path
      fill={props.color}
      d="M7.078 10.914c0 .271.1.507.3.707.201.2.434.304.7.31a.927.927 0 0 0 .697-.292l.725-.725.707.707c.2.2.436.3.707.3.272 0 .507-.1.708-.3a.99.99 0 0 0 .309-.698.927.927 0 0 0-.292-.698l-.724-.725.707-.707c.2-.2.3-.436.3-.707 0-.271-.1-.507-.3-.707a.99.99 0 0 0-.699-.31.927.927 0 0 0-.698.292l-.725.725-.707-.707c-.2-.2-.436-.3-.707-.3-.271 0-.507.1-.707.3a.99.99 0 0 0-.31.698.927.927 0 0 0 .292.698l.725.725-.707.707c-.2.2-.3.436-.3.707Z"
    />
  </Svg>
);
export default SvgSearchNoResults;