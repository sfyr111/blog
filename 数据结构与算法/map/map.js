const MyMap = function () {
  this.collecction = {}
  this.count = 0
  this.size = () => this.count

  this.set = function (key, value) {
    this.collecction[key] = value
    this.count++
  }

  this.has = function (key) {
    return (key in this.collecction)
  }

  this.get = function (key) {
    return this.has(key) ? this.collecction[key] : null
  }

  this.delete = function (key) {
    if (this.has(key)) {
      delete this.collecction[key]
      this.count--
    }
  }

  this.values = function () {
    let result = []
    for (let key of Object.keys(this.collecction)) {
      result.push(this.collecction[key])
    }
    return result.length > 0 ? result : null
  }

  this.keys = function () {
    return Object.keys(this.collecction)
  }

  this.clear = function () {
    this.collecction = {}
    this.count = 0
  }
}

let map = new MyMap();
map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 2);
map.set('belley button', 1);

console.log(map.get('fingers'));
console.log(map.size());
console.log(map.values());

let map2 = new Map();
map2.has('hands');
map2.entries();

let keyObj = {},
keyFunc = function() {};

map2.set('hello', 'string value');
map2.set(keyObj, 'obj value');
map2.set(keyFunc, 'func value');
map2.set(NaN, 'NaN value')

console.log(map2.size);

console.log(map2.get('hello'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));