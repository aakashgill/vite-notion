import Tooltip from "./Tooltip";
import ClickToCopy from "./ClickToCopy";
import SharingLink from "./SharingLink";
function NotionWidgetFooter() {
    return (
        <div className="D(f) Jc(sb) Ai(c) P(4px) Bdtw(1px) Bdts(s) Bdtc(color-grey2)">
            <SharingLink/>
            <div>
                <Tooltip position="bottom-right" content="This page has public link access, so anyone with the link will be able to view the page." width="300">
                    <ClickToCopy textToCopy={window.location.href} text="Copy link" iconName="icon-link" size="small"/>
                </Tooltip>
            </div>
        </div>
    )
}
export default NotionWidgetFooter;