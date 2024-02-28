import { CSSProperties } from "react";
import * as Logos from "../..";

const meta = {
  title: "Lunit Design System Logo",
  component: Logos.Lunit,
};

export default meta;

export const LunitLogo = {
  component: Logos.Lunit,
};

export const CustomStyleLogo = {
  render: () => <Logos.Lunit style={{ width: "auto", height: "20px" }} />,
};

const wrapperStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "4px",
};
const darkBgStyle = { backgroundColor: "#000", color: "#fff" };

export const AllLogos = {
  render: () => (
    <div>
      {Object.keys(Logos).map((key) => {
        const Logo = Logos[key as keyof typeof Logos];
        return (
          <div
            style={{
              ...wrapperStyle,
              ...(key.indexOf("Dark") > -1 ? darkBgStyle : {}),
            }}
          >
            <Logo key={key} />
            <span>{key}</span>
          </div>
        );
      })}
    </div>
  ),
};
