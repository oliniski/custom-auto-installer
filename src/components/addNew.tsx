import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { hiddenContentStyle, mergeStyles } from '@fluentui/react/lib/Styling';
import { useId, useBoolean } from '@fluentui/react-hooks';
import {CommandBar, ICommandBarItemProps} from "@fluentui/react/lib/CommandBar";
import { TextField } from '@fluentui/react/lib/TextField';

const dialogStyles = { main: { maxWidth: 450 } };

const screenReaderOnly = mergeStyles(hiddenContentStyle);
const dialogContentProps = {
    type: DialogType.normal,
    title: 'New Software',
    closeButtonAriaLabel: 'Close',
};

export const DialogBasicExample: React.FunctionComponent = () => {
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const labelId: string = useId('dialogLabel');
    const subTextId: string = useId('subTextLabel');

    const modalProps = React.useMemo(
        () => ({
            titleAriaId: labelId,
            subtitleAriaId: subTextId,
            isBlocking: false,
            styles: dialogStyles
        }),
        [labelId, subTextId],
    );

    const _menuItems: ICommandBarItemProps[] = [
        {
            key: "newItem",
            text: "New",
            iconProps: { iconName: 'Add' },
            onClick: toggleHideDialog
        },
    ];

    const _menuFarItems: ICommandBarItemProps[] = [
        {
            key: 'settings',
            text: 'Settings',
            ariaLabel: 'Settings',
            iconOnly: true,
            iconProps: { iconName: 'Settings' },
            onClick: () => console.log('Settings')
        },
        {
            key: 'info',
            text: 'Info',
            ariaLabel: 'Info',
            iconOnly: true,
            iconProps: { iconName: 'Info' },
            onClick: () => console.log('Info')
        }
    ];


    return (
        <>
            <CommandBar
                items={_menuItems}
                farItems={_menuFarItems}
            />
            <label id={labelId} className={screenReaderOnly}>
                My sample label
            </label>
            <label id={subTextId} className={screenReaderOnly}>
                My sample description
            </label>

            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                dialogContentProps={dialogContentProps}
                modalProps={modalProps}
            >
                <TextField label="Name" />
                <TextField label="URL" prefix="https://"/>
                <DialogFooter>
                    <PrimaryButton onClick={toggleHideDialog} text="Add" />
                    <DefaultButton onClick={toggleHideDialog} text="Cancel" />
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default DialogBasicExample;
