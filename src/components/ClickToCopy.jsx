import { useState } from "react";
import Icon from "./Icon";

function ClickToCopy(props) {
    let {size, iconName, text, textToCopy, classNames} = props;
    let [copyText, setCopyText] = useState(text);
    let [alert, setAlert] = useState(false);
    
    function executeCopyText() {
        navigator.clipboard.writeText(textToCopy);
        setCopyText("Copied");
        setAlert(true);
        setTimeout(() => {
            setCopyText(text);
            setAlert(false);
        }, 1000);
    }
    return (
        <>
            <button onClick={() => executeCopyText()} className={`button button--transparent Cur(co)  ${size == 'small' ? 'button--small' : ''} ${classNames}`}>
                { iconName &&
                    <span className="Mend(6px) Lh(0)">
                        <Icon name={iconName} width="14"/>
                    </span>
                }
                <span className="C(color-grey)">
                    {
                        copyText
                    }
                </span>
            </button>
            {
                alert && 
                <div className="Pos(f) B(10px) Start(50%) TranslateX(-50%) Bgc(color-black) C(color-white) P(5px) Bdrs(4px) Fz(12px)">
                    Copied link to clipboard
                </div>
            }
        </>
    );
}

export default ClickToCopy;