import { createElement } from "react";

import "./ui/TbnCustomInput.css";
import { Input } from "antd";

export function TbnCustomInput({ prefix, suffix, textAttribute, placeHolder, disabled, onChangeAct }) {
    function onChange(value) {
        if (onChangeAct && onChangeAct.canExecute && !onChangeAct.isExecuting) {
            onChangeAct.execute(value);
        }
    }

    if (textAttribute.status === "available") {
        return (
            <Input
                prefix={prefix}
                suffix={suffix}
                value={textAttribute.value}
                placeholder={placeHolder}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                parser={value => value.replace(/\$\s?|(,*)/g, "")}
                onChange={onChange}
                disabled={disabled}
            />
        );
    } else {
        return <div></div>;
    }
}
