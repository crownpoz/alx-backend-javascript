export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // const would not change in code block
    const task = true;
    // const would not change in code block
    var task2 = false;
  }

  return [task, task2];
}
