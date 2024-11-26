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
                const config = componentConfig[item]
                return <MaterialItem desc={config.desc} key={config.name} name={config.name}></MaterialItem>
            })
        }
    </div>

        ;
}

export default Material;