declare type ObjectFilterCallback<T extends object> = (currentItem: any, key: string | number | Symbol, resultObject: any, originObject: T) => boolean;
export declare const objectFilter: <T extends {
    [key: string]: any;
}>(originObject: T, callback: ObjectFilterCallback<T>) => any;
export {};
//# sourceMappingURL=index.d.ts.map