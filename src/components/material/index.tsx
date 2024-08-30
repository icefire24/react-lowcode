import { FC } from "react";
import { useComponentConfigStore } from "../../store/component-config";
import MaterialItem from "../MaterialsItem";


interface MaterialProps {

}

const Material: FC<MaterialProps> = (props) => {
    let { componentConfig } = useComponentConfigStore()
    const components = useMemo(() => {
        return Object.keys(componentConfig)
    }, [componentConfig])
    return <div  >
        {
            components.map(item => {
                const component = componentConfig[item].component
                return <MaterialItem key={component.name} name={component.name}></MaterialItem>
            })
        }
    </div>

        ;
}

export default Material;