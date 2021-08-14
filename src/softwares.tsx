import formatBytes from "./utils/formatBytes";
import { IColumn } from '@fluentui/react/lib/DetailsList';

export interface ISoftware {
    key: string,
    name: string,
    value: string,
    iconName: string,
    dateInserted: string,
    size: string,
    path: string
}

const softwareList: ISoftware[] = [
    {
        key: "steam",
        name: "Steam",
        value: "Steam",
        iconName: "Page",
        dateInserted: new Date().toLocaleDateString(),
        size: formatBytes(2551515),
        path: "C:/Program Files",
    },
    {
        key: "chrome",
        name: "Google Chrome",
        value: "Google Chrome",
        iconName: "Google Chrome",
        dateInserted: new Date().toLocaleDateString(),
        size: formatBytes(45154874874),
        path: "C:/Program Files"
    }
]

export const columns: IColumn[] = [
    {
        key: "column1",
        name: "Icon",
        iconName: "Page",
        isIconOnly: true,
        fieldName: "iconName",
        minWidth: 16,
        maxWidth: 16
    },
    {
        key: "column2",
        name: "Name",
        fieldName: 'name',
        minWidth: 150,
        maxWidth: 150,
    },
    {
        key: "column3",
        name: "Date Inserted",
        fieldName: 'dateInserted',
        minWidth: 100,
        maxWidth: 100,
    },
    {
        key: "column4",
        name: "Path",
        fieldName: 'path',
        minWidth: 200
    },
    {
        key: "column5",
        name: "Size",
        fieldName: 'size',
        minWidth: 50,
        maxWidth: 50,
    },
    {
        key: "column6",
        name: "Edit",
        iconName: "edit",
        minWidth: 15
    }

]

export default softwareList;