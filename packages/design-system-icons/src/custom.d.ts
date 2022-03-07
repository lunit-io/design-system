/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
