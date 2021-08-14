import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
import { DetailsList, DetailsListLayoutMode } from '@fluentui/react/lib/DetailsList';
import AddNew from './components/addNew';

import softwareList, {columns} from './softwares';

const App: React.FunctionComponent = () => {
    return (
        <div>
            <AddNew />

            <DetailsList
                items={softwareList}
                columns={columns}
                layoutMode={DetailsListLayoutMode.justified}
                isHeaderVisible={true}
                enterModalSelectionOnTouch={true}
                ariaLabelForSelectionColumn="Toggle selection"
                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                checkButtonAriaLabel="select row"
            />
        </div>
    );
}

export default App;
