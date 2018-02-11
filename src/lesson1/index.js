import task from './task';

export default {
  task, // example task
};

console.log(task.evalKey({ x: { y: 2 }, z: 5 }, '.x.y'));

