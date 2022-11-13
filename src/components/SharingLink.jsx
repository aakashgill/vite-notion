import Icon from "./Icon";
function SharingLink() {
    return (
        <div>
            <a href="https://www.notion.so/help/sharing-and-permissions" target="_blank" className="button button--small button--transparent P(0)">
                <span className="Mend(6px) Lh(0)">
                    <Icon width="14" name="icon-hint" />
                </span>
                Learn about sharing
            </a>
        </div>
    );
}

export default SharingLink;