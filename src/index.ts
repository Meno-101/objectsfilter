export type AnyObject = Record<any, {}>;

type ObjectsFilterCallback<T extends AnyObject> = (
  currentItem: any,
  key: string | number | Symbol,
  resultObject: any,
  originObject: T,
) => boolean;

type ObjectsForEachCallback<T extends AnyObject> = (
  currentItem: any,
  key: string | number | Symbol,
  originObject: T,
) => void;

export const objectsFilter = <T extends { [key: string]: any }>(
  originObject: T,
  callback: ObjectsFilterCallback<T>,
) => {
  const keys = Object.keys(originObject);

  return keys.reduce((resultObject: any, key: string) => {
    const currentItem = originObject[key];
    const resBool = callback(currentItem, key, resultObject, originObject);
    if (resBool) {
      resultObject[key] = originObject[key];
    }

    return resultObject;
  }, {} as T);
};

export const objectsForEach = <T extends { [key: string]: any }>(
  originObject: T,
  callback: ObjectsForEachCallback<T>,
) => {
  const keys = Object.keys(originObject);

  keys.forEach((key: string) => {
    const currentItem = originObject[key];
    callback(currentItem, key, originObject);
  });
};
