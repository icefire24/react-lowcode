import { FC, PropsWithChildren } from "react";
import { useDrop } from 'react-dnd'
import { useMaterialDrop } from "../../../hooks/useMaterialDrop";
import { useComponetsStore } from "../../../store/component";
import { useComponentConfigStore } from "../../../store/component-config";
import { CommonComponentProps } from "../../../types";

interface ContainerProps {

}

const Container: FC<CommonComponentProps> = ({ id, name, children }) => {
    let { canDrop, dropRef }=useMaterialDrop(['Button','Container'],id)
    return (<div ref={dropRef} className='border-1 border-[#000] min-h-[100px] p-[20px]'>{children}</div>);
}

export default Container;