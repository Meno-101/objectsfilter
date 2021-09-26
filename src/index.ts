type ObjectFilterCallback<T extends object> = (
  currentItem: any,
  key: string | number | Symbol,
  resultObject: any,
  originObject: T,
) => boolean;

export const objectFilter = <T extends { [key: string]: any }>(
  originObject: T,
  callback: ObjectFilterCallback<T>,
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
