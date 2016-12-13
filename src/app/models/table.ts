export interface Table {
    name: string;
    fields: string[];
    isEmpty: boolean;
    count: number;
}

export interface ResultTable {
    name?: string;
    columns: string[];
    rows: any[];
    columnCount: number;
}