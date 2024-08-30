import { FC } from "react";
import { Button as AntdButton } from 'antd'
import { ButtonType } from "antd/es/button";

interface ButtonProps {
    type: ButtonType
    text: string
}

const Button: FC<ButtonProps> = ({ type, text }) => {

    return <AntdButton type={type}>{text}</AntdButton>

}

export default Button;