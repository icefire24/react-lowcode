import { useMaterialDrop } from "../../../hooks/useMaterialDrop";
import { CommonComponentProps } from "../../../types";

function Page({id,name, children }: CommonComponentProps) {
    let {canDrop,dropRef}=useMaterialDrop(['Button','Container'],id)
    return (
        <div
            ref={dropRef}
            data-component-id={id}
            className='p-[20px] h-[100%] box-border'
            style={{border: canDrop ? '1px solid blue' : 'none'}}
        >
            {children}
        </div>
    )
}

export default Page;
