import Tooltip from "./Tooltip";
import Checkbox from "./Checkbox";
import Icon from "./Icon";

function NotionWidgetBody(props) {
    let { shareToWebCopy, isVisibleShareToWeb, toggleShareToWeb } = props;
    return (
        <Tooltip position="top-center" image="https://www.notion.so/images/tooltips/share/public-page.8f4bb385.png" content="Anybody with the link can access the page.">
            <Checkbox 
                name="share to web" 
                id="share-to-web" 
                label="Share to web" 
                subLabel={shareToWebCopy} 
                value={isVisibleShareToWeb} 
                onChange={toggleShareToWeb}
            >
                <span className="Mend(10px) Lh(0)">
                    <Icon name="icon-globe" width="26" />
                </span>
            </Checkbox>
        </Tooltip>
    );
}
export default NotionWidgetBody