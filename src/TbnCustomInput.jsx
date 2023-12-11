import { createElement } from "react";

import "./ui/TbnCustomInput.css";
import { Input, Tooltip } from "antd";

export function TbnCustomInput({ prefix, suffix, textAttribute, placeHolder }) {
    if (textAttribute.status === "available") {
        return <Input prefix={prefix} suffix={suffix} value={textAttribute.value} placeholder={placeHolder} />;
    } else {
        return <div></div>;
    }
}
