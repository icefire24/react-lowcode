import { FC } from "react";
import { Button as AntdButton } from 'antd'
import { ButtonType } from "antd/es/button";
import { CommonComponentProps } from "../../../types";

interface ButtonProps {
    type: ButtonType
    text: string
}

const Button: FC<CommonComponentProps> = ({id, type, text }) => {

    return <AntdButton data-component-id={id} type={type}>{text}</AntdButton>

}

export default Button;