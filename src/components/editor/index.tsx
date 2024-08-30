import React, { FC, ReactNode } from "react";
import { Component, useComponetsStore } from "../../store/component";
import { useComponentConfigStore } from "../../store/component-config";

interface EditorProps {

}

const Editor: FC<EditorProps> = (props) => {
    let { components, addComponent } = useComponetsStore()
    let { componentConfig } = useComponentConfigStore()
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
           
        },1)
    }, []);
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
                    name:component.name,
                    ...config.defaultProps,
                    ...component.props,
                },
                renderComponents(component.children || [])
            )
        })
    }
    return (
        <>

        {
            renderComponents(components)
        }
        </>
    );

}

export default Editor;