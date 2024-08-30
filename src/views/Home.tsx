import { Allotment } from 'allotment'
import {Button} from 'antd'
import { userStore } from "../use";
import "allotment/dist/style.css";
import Header from '../components/header';
import Material from '../components/material';
import Editor from '../components/editor';
import Setting from '../components/setting';

function Home() {
    return (<div className='w-full h-full relative flex flex-col'>
        <div className='h-[60px] flex items-center border-b-1 border-[#000] b-b-solid
'>
            <Header></Header>
        </div>
        <Allotment>
            <Allotment.Pane preferredSize={200} minSize={100} maxSize={300}>
                <Material></Material>
            </Allotment.Pane>
            <Allotment.Pane preferredSize={1000}>
                <Editor></Editor>
            </Allotment.Pane>
            <Allotment.Pane preferredSize={500}>
                <Setting></Setting>
            </Allotment.Pane>
        </Allotment>
    </div>);
}

export default Home;