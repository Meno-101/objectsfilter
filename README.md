# object's filter

Basically it's just like `Array.prototype.filter` but more of `Object.filter`.

## install

```sh
npm i objectsfilter
```

Simplest ever usage:

```ts
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
  return objectFilter(cats, cat => !!cat);
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

you get the idea, Or you can go real wild with it...

Made for easy objects filtering.

For some strange reason you may need this, but most likely you won't.

Easy to use, maintain, and contain some vitamin Cat as well.

---

## 📑 License

This software is licensed under the GNU GENERAL PUBLIC LICENSE ©
