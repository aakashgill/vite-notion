import { useState, useEffect } from 'react';
import InviteByEmail from './InviteByEmail';
import NotionWidgetHeader from './NotionWidgetHeader';
import NotionWidgetBody from './NotionWidgetBody';
import NotionWidgetURLCopy from './NotionWidgetURLCopy';
import NotionWidgetSettings from './NotionWidgetSettings';
import { NotionWidgetMoreOptions, NotionWidgetMoreOptionsButton } from './NotionWidgetMoreOptions';
import NotionWidgetFooter from './NotionWidgetFooter';

function NotionWidget() {
  let defaultsCopy = 'Publish and share link with anyone';
  let [defaultView, triggerDefaultView] = useState(true);
  let [isInviteByEmail, toggleIsInviteByEmail] = useState(false);
  let [isVisibleShareToWeb, setisVisibleShareToWeb] = useState(false);
  let [isVisibleOptions, setIsVisibleOptions] = useState(true);
  let [shareToWebCopy, setShareToWebCopy] = useState(defaultsCopy);
  let [allowOptions, setAllowOptions] = useState({
    allowEdit: false,
    allowComments: false,
    allowDuplicates: true,
  });

  useEffect(() => {
    editCopy()
  }, [allowOptions, isVisibleShareToWeb]);

  function editCopy() {

    if (allowOptions.allowEdit && allowOptions.allowComments && isVisibleShareToWeb) {
      setShareToWebCopy('Anyone with the link can edit and comment');
    }

    else if (allowOptions.allowComments && isVisibleShareToWeb) {
      setShareToWebCopy('Anyone with the link can comment');
    }

    else if ((!allowOptions.allowEdit) && (!allowOptions.allowComments) && isVisibleShareToWeb) {
      setShareToWebCopy('Anyone with the link can view');
    }
  }

  function toggleIsAllowEditing(e) {
    let name = e.target.name;
    let value = e.target.checked;

    let updatedVal = {
      ...allowOptions,
      [name]: value
    }

    if (e.target.name === 'allowEdit' && (e.target.checked)) {
      updatedVal['allowComments'] = true;
    }
    if (e.target.name === 'allowComments' && (!e.target.checked)) {
      updatedVal['allowEdit'] = false;
    }

    setAllowOptions(updatedVal);
  }

  function toggleShareToWeb() {
    setisVisibleShareToWeb(!isVisibleShareToWeb);
    setIsVisibleOptions(false);
    setShareToWebCopy(defaultsCopy);
  }

  function toggleInvitePeople() {
    toggleIsInviteByEmail(true);
    triggerDefaultView(false);
  }

  function hideInvitePeople() {
    toggleIsInviteByEmail(false);
    triggerDefaultView(true);
  }

  function showMoreOptions() {
    setIsVisibleOptions(!isVisibleOptions);
  }

  return (
    <div className="Bgc(color-white) Bdrs(4px) W(470px) W(a)--sm Bxsh($shadow) Mstart(a)">
      {
        defaultView &&
        <div>
          <NotionWidgetHeader toggleInvitePeople={toggleInvitePeople} />

          <NotionWidgetBody
            shareToWebCopy={shareToWebCopy}
            isVisibleShareToWeb={isVisibleShareToWeb}
            toggleShareToWeb={toggleShareToWeb}
          />

          {
            isVisibleShareToWeb
            &&
            <>
              <NotionWidgetURLCopy />
              <NotionWidgetMoreOptionsButton
                isVisibleOptions={isVisibleOptions}
                showMoreOptionTrigger={showMoreOptions}
              />
              <NotionWidgetMoreOptions
                isVisibleOptions={isVisibleOptions}
                allowOptions={allowOptions}
                toggleIsAllowEditing={toggleIsAllowEditing}
              />

             <NotionWidgetSettings />
            </>
          }

          <NotionWidgetFooter />
        </div>
      }

      {
        isInviteByEmail && <InviteByEmail closeClickHandler={hideInvitePeople} />
      }
    </div>
  );
}


export default NotionWidget;