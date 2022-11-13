import Checkbox from "./Checkbox";
import Tooltip from "./Tooltip";
import Icon from "./Icon";

function NotionWidgetMoreOptions(props) {
    let {toggleIsAllowEditing, allowOptions, isVisibleOptions} = props;
    return isVisibleOptions && (
        <div>
            <Checkbox name="linkExpires" id="link-expires" label="Link expires" value={false} tag="Personal pro" disabled={true} />
            <Tooltip 
                position="top-center" 
                image="https://www.notion.so/images/tooltips/share/allow-editing.70797afd.png" 
                content="Any logged in Notion user can edit this page. Share the secret link with people you trust."
            >
                <Checkbox name="allowEdit" id="allow-editing" label="Allow editing" value={allowOptions.allowEdit} onChange={toggleIsAllowEditing} />
            </Tooltip>

            <Tooltip 
                position="top-center" 
                image="https://www.notion.so/images/tooltips/share/allow-comments.41b0c5c5.png" 
                content="Any logged in Notion user can comment on this page."
            >
                <Checkbox name="allowComments" id="allow-comments" label="Allow comments" value={allowOptions.allowComments} onChange={toggleIsAllowEditing} />
            </Tooltip>

            <Tooltip 
                position="top-center" 
                image="https://www.notion.so/images/tooltips/share/allow-duplicate.be0639d0.png" 
                content="If allowed, this will allow other people to duplicate your public page to their workspace."
            >
                <Checkbox name="allowDuplicates" id="allow-duplicates" label="Allow duplicate as template" value={allowOptions.allowDuplicates} onChange={toggleIsAllowEditing} />
            </Tooltip>
            
            <Checkbox name="searchEngine" id="search-engine" label="Search engine indexing" tag="Personal pro" value={false} disabled />
        </div>
    );
}

function NotionWidgetMoreOptionsButton(props) {
    let {showMoreOptionTrigger, isVisibleOptions} = props;
    return (
        <button type="button" onClick={() => showMoreOptionTrigger()} className={`button button--small button--transparent Jc(fs) W(100%) Pstart(14px) ${isVisibleOptions ? 'D(n)' : ''}`}>
            <span className="Mend(5px)">Show link options</span>
            <Icon name="icon-chevron-down" width="10" />
        </button>
    )
}
export { NotionWidgetMoreOptions, NotionWidgetMoreOptionsButton}