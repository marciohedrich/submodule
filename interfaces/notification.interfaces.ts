export interface INotification<T = unknown> {
    // readonly hub: Hub;
    businessUnit: string;
    content: T;
}

export interface IHub{
    name : String;
}

export interface IBU{
    
}
