import { Text, Element } from '@codesandbox/components';
import React, { FunctionComponent, useEffect } from 'react';
import { useOvermind } from 'app/overmind';

import { SubContainer, PaddedPreference } from '../elements';

export const MailPreferences: FunctionComponent = () => {
  const {
    actions: {
      userNotifications: {
        getNotificationPreferences,
        updateNotificationPreferences,
      },
    },
    state: { userNotifications },
  } = useOvermind();

  useEffect(() => {
    getNotificationPreferences();
  }, [getNotificationPreferences]);

  return (
    <>
      <Text block marginBottom={6} size={4} weight="bold">
        Email me when...
      </Text>

      {userNotifications.preferences ? (
        <SubContainer>
          <Element paddingTop={4}>
            <PaddedPreference
              setValue={(value: boolean) =>
                updateNotificationPreferences({
                  emailNewComment: value,
                })
              }
              title="New comment"
              tooltip="Email on new comment"
              type="boolean"
              value={userNotifications.preferences.emailNewComment}
            />
            <Text
              block
              marginTop={2}
              size={3}
              style={{ maxWidth: '60%' }}
              variant="muted"
            >
              A user left a comment on one of my sandboxes
            </Text>
          </Element>
          <Element paddingTop={4}>
            <PaddedPreference
              setValue={(value: boolean) =>
                updateNotificationPreferences({
                  emailCommentReply: value,
                })
              }
              title="Replies"
              tooltip="Email on new reply"
              type="boolean"
              value={userNotifications.preferences.emailCommentReply}
            />
            <Text
              block
              marginTop={2}
              size={3}
              style={{ maxWidth: '60%' }}
              variant="muted"
            >
              A reply has been left on one of my comments
            </Text>
          </Element>
          <Element paddingTop={4}>
            <PaddedPreference
              setValue={(value: boolean) =>
                updateNotificationPreferences({
                  emailCommentMention: value,
                })
              }
              title="@Mentions"
              tooltip="Email on new mention"
              type="boolean"
              value={userNotifications.preferences.emailCommentMention}
            />
          </Element>
          <Text
            block
            marginTop={2}
            size={3}
            style={{ maxWidth: '60%' }}
            variant="muted"
          >
            Someone mentioned me in a comment
          </Text>
        </SubContainer>
      ) : (
        <Text align="center" marginTop={6} size={3}>
          Loading email settings...
        </Text>
      )}
    </>
  );
};
