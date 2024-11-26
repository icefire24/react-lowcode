import {create} from 'zustand';
import Button from '../components/material/Button';
import Container from '../components/material/Container';
import Page from '../components/material/Page';

export interface ComponentSetter {
    name: string;
    label: string;
    type: string;
    [key: string]: any;
}

export interface ComponentConfig {
    name: string;
    defaultProps: Record<string, any>,
    desc: string;
    setter?: ComponentSetter[]
    component: any
}

 
interface State {
    componentConfig: {[key: string]: ComponentConfig};
}

interface Action {
    registerComponent: (name: string, componentConfig: ComponentConfig) => void
}

export const useComponentConfigStore = create<State & Action>((set) => ({
    componentConfig: {
        Container: {
            name: 'Container',
            defaultProps: {},
            desc: '容器',
            component: Container
        },
        Button: {
            name: 'Button',
            desc: '按钮',
            defaultProps: {
                type: 'primary',
                text: '按钮1'
            },
            component: Button
        },
        Page: {
            name: 'Page',
            desc: '页面',
            defaultProps: {},
            component: Page
        }
    },
    registerComponent: (name, componentConfig) => set((state) => {
        return {
            ...state,
            componentConfig: {
                ...state.componentConfig,
                [name]: componentConfig
            }
        }
    })
}));
