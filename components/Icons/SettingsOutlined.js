import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSettingsOutlined = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    {...props}>
    <Path
      fill={props.color}
      d="M13.875 22h-3.75a.934.934 0 0 1-.65-.25.997.997 0 0 1-.325-.625l-.3-2.325a3.79 3.79 0 0 1-.612-.3 8.266 8.266 0 0 1-.563-.375l-2.175.9a1.119 1.119 0 0 1-.7.025.929.929 0 0 1-.55-.425L2.4 15.4a.94.94 0 0 1-.125-.7.96.96 0 0 1 .375-.6l1.875-1.425a2.387 2.387 0 0 1-.025-.338v-.675c0-.108.009-.22.025-.337L2.65 9.9a.96.96 0 0 1-.375-.6.94.94 0 0 1 .125-.7l1.85-3.225a.786.786 0 0 1 .538-.438c.241-.058.479-.045.712.038l2.175.9c.184-.133.375-.258.575-.375.2-.117.4-.217.6-.3l.3-2.325a.996.996 0 0 1 .325-.625c.184-.167.4-.25.65-.25h3.75c.25 0 .467.083.65.25a.996.996 0 0 1 .325.625l.3 2.325c.217.083.421.183.613.3.191.117.379.242.562.375l2.175-.9a1.12 1.12 0 0 1 .7-.025.929.929 0 0 1 .55.425L21.6 8.6a.94.94 0 0 1 .125.7.96.96 0 0 1-.375.6l-1.875 1.425c.017.117.025.23.025.338v.675c0 .108-.016.22-.05.337l1.875 1.425c.2.15.325.35.375.6a.94.94 0 0 1-.125.7l-1.85 3.2a.982.982 0 0 1-.562.438c-.242.075-.48.07-.713-.013l-2.125-.9a6.826 6.826 0 0 1-.575.375c-.2.117-.4.217-.6.3l-.3 2.325a.996.996 0 0 1-.325.625.934.934 0 0 1-.65.25Zm-1.825-6.5c.967 0 1.792-.342 2.475-1.025A3.372 3.372 0 0 0 15.55 12c0-.967-.341-1.792-1.025-2.475A3.372 3.372 0 0 0 12.05 8.5c-.983 0-1.812.342-2.487 1.025A3.393 3.393 0 0 0 8.55 12c0 .967.338 1.792 1.013 2.475.675.683 1.504 1.025 2.487 1.025Zm0-2c-.416 0-.77-.146-1.062-.438A1.447 1.447 0 0 1 10.55 12c0-.417.146-.77.438-1.063a1.447 1.447 0 0 1 1.062-.437c.417 0 .771.146 1.063.438.292.291.437.645.437 1.062 0 .417-.146.77-.437 1.063a1.446 1.446 0 0 1-1.063.437ZM11 20h1.975l.35-2.65c.517-.133.996-.33 1.438-.588a5.97 5.97 0 0 0 1.212-.937l2.475 1.025.975-1.7-2.15-1.625c.084-.233.142-.48.175-.738a6.135 6.135 0 0 0 0-1.575 3.522 3.522 0 0 0-.175-.737l2.15-1.625-.975-1.7-2.475 1.05a5.551 5.551 0 0 0-1.212-.962 5.604 5.604 0 0 0-1.438-.588L13 4h-1.975l-.35 2.65c-.516.133-.995.33-1.437.587-.442.259-.846.571-1.213.938L5.55 7.15l-.975 1.7 2.15 1.6c-.083.25-.141.5-.175.75a6.06 6.06 0 0 0-.05.8c0 .267.017.525.05.775.034.25.092.5.175.75l-2.15 1.625.975 1.7 2.475-1.05c.367.383.771.704 1.213.962.442.259.92.455 1.437.588L11 20Z"
    />
  </Svg>
);
export default SvgSettingsOutlined;
