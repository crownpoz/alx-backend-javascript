export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // const would not change in code block
    const task = true;
    // const would not change in code block
    const task2 = false;
  }

  return [task, task2];
}
