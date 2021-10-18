export declare type AnyObject = Record<any, {}>;
declare type ObjectsFilterCallback<T extends AnyObject> = (currentItem: any, key: string | number | Symbol, resultObject: any, originObject: T) => boolean;
declare type ObjectsForEachCallback<T extends AnyObject> = (currentItem: any, key: string | number | Symbol, originObject: T) => void;
export declare const objectsFilter: <T extends {
    [key: string]: any;
}>(originObject: T, callback: ObjectsFilterCallback<T>) => any;
export declare const objectsForEach: <T extends {
    [key: string]: any;
}>(originObject: T, callback: ObjectsForEachCallback<T>) => void;
export {};
//# sourceMappingURL=index.d.ts.map