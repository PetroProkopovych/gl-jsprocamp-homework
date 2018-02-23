import task from './task';

export default {
  task,
};

const init = [['a', 1], ['b', 2], ['c', 3]];
const myMap = task.createMap(init);
const result = [];
myMap.forEach((v, k) => result.push([k, v]));






