/*
  Write a function that creates custom set object. Function
  accepts single optional parameter (array) do define initial
  set content.
  Set should have add(), has(), delete(), forEach(), clear() methods
  and size property. Should not use es6 objects Set, WeakSet,
  but work in similar way. Set should preserve addition order
  in forEach() method.
  mySet = createSet(['a', 'b', 'c'])
*/
export function createSet(arr) {
    return {
        values: arr ? arr: [],
        get size() {
            return this.values.length;
        },
        add(val) {
            if (!this.values.includes(val)) {
                this.values.push(val);
            }
        },
        has(val) {
            return this.values.contains(val);
        },
        delete(val) {
            this.values = this.values.filter(x => x !== val);
        },
        forEach(func) {
            return this.values.map(func);
        },
        clear() {
            this.values = [];
        }
    }
}

/*
  Write a function that creates custom map object. Function
  accepts single optional parameter (array) do define initial
  map content.
  Map should have set(), get(), has(), delete(), forEach(), clear()
  methods and size property. Should not use es6 objects Map, WeakMap,
  but work in similar way. Map should preserve addition order
  in forEach() method.
  myMap = createMap([['a', 1], ['b', 2], ['c', 3]])
*/
export function createMap(arr) {
    return {
        values: arr ? arr: [],
        get size() {
            return this.values.length;
        },
        set(key, val) {
            const index = this.values.findIndex(x => x[0] === key);
            if (~index) {
                this.values[index][1] = val;
            } else {
                this.values.push([key, val]);
            }
        },
        get(key) {
            const entry =  this.values.find(x => x[0] === key);
            if (entry) return entry[1];
        },
        has(key) {
            return !!this.values.find(x => x[0] === key);
        },
        delete(key) {
            const index = this.values.findIndex(x => x[0] === key);
            if (~index) {
                this.values.splice(index, 1);
                return true;
            }
            return false;
        },
        forEach(func) {
            for (let i of this.values) {
                console.log(i);
                func(...i.reverse());
                i.reverse();
            }
        },
        clear() {
            this.values = [];
        }
    }
}

export default {
    createSet,
    createMap
};
