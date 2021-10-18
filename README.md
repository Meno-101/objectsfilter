# object's filter

Basically it's just like `Array.prototype.filter` but more of `Object.filter`.

## install

```sh
npm i objectsfilter
```

## Syntax:

### objectsFilter:

It's an Objects filter, let you filter objects on certain conditions with a flexibility.

```
const result = objectsFilter(object, callback);
```

#### Arguments:

- `object`
  - Any object that you may think of.
- `callback`
  - a testing function to test whether a certain condition is true or false, it has four parameters.
    - `currentItem` each looped value in the passed object
    - `currentKey` each looped key in the passed object
    - `resultObject` the collected result till the current time of the object
    - `originObject` the original object as passed

#### Returns:

- a new object with the filtered results, or empty object if none-found.

usage:

```ts
const { objectsFilter } = require('objectsfilter');

const catsObject = {
  Oliver: 'Meow',
  Leo: 'Meow',
  Milo: '',
  Charlie: undefined,
  Simba: 'Meow',
  Max: 'Meow',
  Jack: false,
};

function checkCatsAvailability(cats) {
  return objectsFilter(cats, cat => !!cat);
}

const cats = checkCatsAvailability(catsObject);

function availableSaysMeow(cats) {
  for (const cat of cats) {
    console.log(`${cat} says Meow`);
  }
}

availableSaysMeow();
// Oliver says Meow
// Leo says Meow
// Charlie says Meow
// Simba says Meow
// Max says Meow
```

### objectsForEach:

It's an Objects forEach method, let you loop through objects on certain with ease, you don't have to worry about `forin` any more.

```
objectsForEach(object, callback);
```

#### Arguments:

- `object`
  - Any object that you may think of.
- `callback`
  - `currentItem` each looped value in the passed object
  - `currentKey` each looped key in the passed object
  - `originObject` the original object as passed

#### Returns:

- void.

usage:

```ts
const { objectsForEach } = require('objectsfilter');

const catsObject = {
  Oliver: 'Meow',
  Leo: 'Meow',
  Milo: '',
  Charlie: undefined,
  Simba: 'Meow',
  Max: 'Meow',
  Jack: false,
};

objectsForEach(catsObject, (catValue, catName) => {
  if (catValue) {
    console.log(`${catName} says Meow`);
  } else {
    console.log(`${catName} isn't here today`);
  }
});

// Oliver says Meow
// Leo says Meow
// Milo isn't here today
// Charlie isn't here today
// Simba says Meow
// Max says Meow
// Jack isn't here today
```

you get the idea, Or you can go real wild with it...

Made for easy objects filtering or looping.

For some strange reason you may need this, trust me ;)

Easy to use, maintain, and contain some vitamin Cat as well.

---

## 📑 License

This software is licensed under the GNU GENERAL PUBLIC LICENSE ©
