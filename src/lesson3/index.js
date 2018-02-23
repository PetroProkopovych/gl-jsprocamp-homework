import task from './task';

export default {
  task,
};

var module = {
    x: 42,
    getX: function(a) {
        return this.x + a;
    }
}

var retrieveX = module.getX;

var boundGetX = task.bindContext(retrieveX, module);
console.log(boundGetX());