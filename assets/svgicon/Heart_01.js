import React from "react";
import Svg, { Path } from "react-native-svg";

const Heart_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M26 10a2.71 2.71 0 010 .29 1.55 1.55 0 010 .22 1.24 1.24 0 010 .27C25.25 18.7 14 25 14 25S2.75 18.7 2.05 10.78a1.24 1.24 0 010-.27 1.55 1.55 0 010-.22A2.71 2.71 0 012 10v-.72c0-.25.07-.49.11-.72a6 6 0 015.58-5.49A6 6 0 018.55 3a4.16 4.16 0 01.54 0A6.48 6.48 0 0114 6.82 6.48 6.48 0 0118.91 3a4.16 4.16 0 01.54 0 6 6 0 01.86.07 6 6 0 015.55 5.49c0 .23.09.47.11.72s.03.48.03.72z"
      fill={props.fill}
    />
  </Svg>
);

export default Heart_01;
