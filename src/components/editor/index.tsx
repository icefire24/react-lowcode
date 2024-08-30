import React, { FC, MouseEventHandler, ReactNode } from "react";
import { Component, useComponetsStore } from "../../store/component";
import { useComponentConfigStore } from "../../store/component-config";
import HoverMask from "../HoverMask";
import SelectMask from "../SelectMask";

interface EditorProps {

}

const Editor: FC<EditorProps> = (props) => {
    let { curComponentId,setCurComponentId,components, addComponent } = useComponetsStore()
    let { componentConfig } = useComponentConfigStore()
    const [hoverComponentId, setHoverComponentId] = useState<number>();
    useEffect(() => {
        addComponent({
            id: 2,
            name: 'Button',
            props: {}
        }, 1)
        addComponent({
            id: 3,
            name: 'Container',
            props: {},

        }, 1)
    }, []);
    const handleMouseOver: MouseEventHandler = (e) => {
        const path = e.nativeEvent.composedPath()
        for (let i = 0; i < path.length; i++) {
            const element = path[i] as HTMLElement;
            const componentId = element.dataset?.componentId
            if (componentId) {
                setHoverComponentId(+componentId)
                return
            }

        }

    }
    const handleMouseClick: MouseEventHandler = (e) => {
        const path = e.nativeEvent.composedPath()
        for (let i = 0; i < path.length; i++) {
            const element = path[i] as HTMLElement;
            const componentId = element.dataset?.componentId
            if (componentId) {
                setCurComponentId(+componentId)
                return
            }

        }

    }
    function renderComponents(components: Component[]): React.ReactNode {
        return components.map((component: Component) => {
            const config = componentConfig?.[component.name]
            if (!config?.component) {
                return null;
            }
            return React.createElement(
                config.component,
                {
                    key: component.id,
                    id: component.id,
                    name: component.name,
                    ...config.defaultProps,
                    ...component.props,
                },
                renderComponents(component.children || [])
            )
        })
    }
    return (
        <div className="h-full edit-area" onMouseOver={handleMouseOver} onMouseLeave={() => {
            setHoverComponentId(undefined)
        }} onClick={handleMouseClick}> 

            {
                renderComponents(components)
            }
            {
                hoverComponentId&&hoverComponentId!=curComponentId && <HoverMask componentId={hoverComponentId} containerClassName="edit-area" ></HoverMask>
            }
            {
                curComponentId && <SelectMask
                    componentId={curComponentId}
                    containerClassName="edit-area"
                ></SelectMask>
            }
        </div>
    );

}

export default Editor;