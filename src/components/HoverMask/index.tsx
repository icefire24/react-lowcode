import { FC } from "react";
import { createPortal } from "react-dom";

interface HoverMaskProps {
    containerClassName: string;
    componentId: number;
}

const HoverMask: FC<HoverMaskProps> = ({ containerClassName, componentId }) => {
    const [position, setPosition] = useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0
    });
    useEffect(() => {
        updatePosition()
    }, [componentId]);
    const updatePosition = () => {
        
        if (!componentId) return
        const container=document.querySelector(`.${containerClassName}`)
        const containerStyle = container?.getBoundingClientRect()
        if (!containerStyle) return
        const component = document.querySelector(`[data-component-id="${componentId}"]`)
        const componentStyle = component?.getBoundingClientRect()
        if (!componentStyle) return
        const width = componentStyle?.width
        const height = componentStyle?.height
        const left = +componentStyle?.left - (+containerStyle?.left)+container?.scrollTop!
        const top = +componentStyle?.top - (+containerStyle?.top)+container?.scrollLeft!
        setPosition({ left, top, width, height })
    }
    const el = useMemo(() => {
        return document.querySelector(`.${containerClassName}`)!
    }, [])
    return (createPortal(<div className="hover-mask"
        style={{
            position: "absolute",
            left: position.left,
            top: position.top,
            width: position.width,
            height: position.height,
            backgroundColor: "rgba(0, 0, 255, 0.1)",
            border: "1px dashed blue",
            pointerEvents: "none",
            zIndex: 12,
            borderRadius: 4,
            boxSizing: 'border-box',
        }}
        onMouseMove={updatePosition}></div>, el));
}

export default HoverMask;