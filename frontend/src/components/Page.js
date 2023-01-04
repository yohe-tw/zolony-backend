import Info from "./Info"
import index from "./data/article/index.json"
import signal from "./data/article/signal.json"
import transmit from "./data/article/transmit.json"
import repeater from "./data/article/repeater.json"
import { Image } from 'antd';
import './css/Page.css'
import Canvas from "./Canvas";
import { UseHook } from "../hook/usehook"

function getImage(name) {
    switch (name) {
        case "./data/img/signal/power.png":
            return require("./data/img/signal/power.png");
        
        case "./data/img/signal/lever.png":
            return require("./data/img/signal/lever.png");

        case "./data/img/transmit/connection.png":
            return require("./data/img/transmit/connection.png");

        case "./data/img/transmit/power-level.png":
            return require("./data/img/transmit/power-level.png");
        
        case "./data/img/transmit/dust-adjust.png":
            return require("./data/img/transmit/dust-adjust.png");
        
        case "./data/img/transmit/power.png":
            return require("./data/img/transmit/power.png");

        case "./data/img/repeater/repeat.png":
            return require("./data/img/repeater/repeat.png");
        
        case "./data/img/repeater/diode.png":
            return require("./data/img/repeater/diode.png");

        case "./data/img/repeater/delay.png":
            return require("./data/img/repeater/delay.png");

        case "./data/img/repeater/lock.png":
            return require("./data/img/repeater/lock.png");
        
        default: break;
    }
}

const Page = ({pageNum, setOpenModal}) => {
    const pages = [index, signal, transmit, repeater];
    const contents = pages[(0 < pageNum && pageNum - 1 < pages.length ? pageNum - 1 : 0)]?.article;
    const { isLogIn } = UseHook();

    const setContents = content => {
        if (typeof content === 'string') return content;

        return <>
        {content.map((e, i) => {
            const ctnt = setContents(e.content);

            const props = {};
            for (const key in e) {
                if (key === 'src') {
                    props[key] = getImage(e[key]);
                }
                else if (key !== 'tagName' && key !== 'content') {
                    props[key] = e[key];
                }
            }

            if (['hr', 'br'].includes(e.tagName))
                return <e.tagName {...props} key={i} />
            
            if(e.tagName === 'img')
                return <Image {...props}/>
            
            if (e.tagName === 'Canvas')
                return <Canvas {...props} key={i} />;

            if (e.tagName !== 'text')
                return <e.tagName {...props} key={i}>{ctnt}</e.tagName>
            else
                return ctnt;
        })}
        </>;
    }

    return (
        <article style={{ "height": "auto", "overflow-y": "auto" }}>
            {pageNum === 0 && isLogIn ? <Info setOpenModal={setOpenModal}/> : setContents(contents)}
        </article>
    );
}

export default Page;