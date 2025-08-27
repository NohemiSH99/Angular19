export interface ITableConfig<T> {
    data: T[]; 
    displayedColumns: IDisplayedColums[]; 
    headers : string[]; 
}

export interface IDisplayedColums { 
    [key: string]: any; 
    header: string; 
    property: string; 
    type: 'button' | 'string';
}

