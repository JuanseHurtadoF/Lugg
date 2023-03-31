type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type StarProps = {
  fill?: RGB | RGBA | HEX
  width?: number,
  height?: number,
  gap?: number,
};