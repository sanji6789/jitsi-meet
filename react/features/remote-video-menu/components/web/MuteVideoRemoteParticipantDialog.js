/* @flow */

import React from 'react';

import { Dialog } from '../../../base/dialog';
import { translate } from '../../../base/i18n';
import { connect } from '../../../base/redux';

import AbstractMuteVideoRemoteParticipantDialog
    from '../AbstractMuteVideoRemoteParticipantDialog';

/**
 * A React Component with the contents for a dialog that asks for confirmation
 * from the user before muting a remote participant.
 *
 * @extends Component
 */
class MuteVideoRemoteParticipantDialog extends AbstractMuteVideoRemoteParticipantDialog {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <Dialog
                okKey = 'dialog.muteVideoParticipantButton'
                onSubmit = { this._onSubmit }
                titleKey = 'dialog.muteVideoParticipantTitle'
                width = 'small'>
                <div>
                    { this.props.t('dialog.muteVideoParticipantBody') }
                </div>
            </Dialog>
        );
    }

    _onSubmit: () => boolean;
}

export default translate(connect()(MuteVideoRemoteParticipantDialog));
