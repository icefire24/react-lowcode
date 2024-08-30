import { FC } from "react";
import { useComponetsStore } from "../../store/component";

interface SettingProps {

}

const Setting: FC<SettingProps> = (props) => {
    let { components } = useComponetsStore()
    return (<div>
        <pre>
            {
                JSON.stringify(components, null, 2)
            }
        </pre>
    </div>);
}

export default Setting;