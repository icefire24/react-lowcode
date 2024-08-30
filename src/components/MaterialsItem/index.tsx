import { FC } from "react";
import {useDrag} from 'react-dnd'

interface MaterialItemProps {
    name: string
}

const MaterialItem: FC<MaterialItemProps> = ({ name }) => {
    const [, dragRef] = useDrag({
        type:name,
        item: {
            type:name
        }
    }) 
    return (<div
        ref={dragRef}
        className='
        border-dashed
        border-1
        border-[#000]
        py-[8px] px-[10px] 
        m-[10px]
        cursor-move
        inline-block
        bg-white
        hover:bg-[#ccc]
    ' >{name}</div>);
}

export default MaterialItem;