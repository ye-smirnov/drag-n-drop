// Code goes here!
// const names: Array<string> = ['Max', 'Manuel']; // string[]
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000)
// })

// promise.then(data => {
//   data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: 'Vasya', hobbies: ['Sports'] },
  { age: 33 }
);
const mergedObj2 = merge({ name: 'Vasya' }, { age: 33 });

console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) descriptionText = 'Got 1 element';
  else if (element.length > 1)
    descriptionText = 'Got ' + element.length + ' element';
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cookies']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value ' + obj[key]
}

console.log(extractAndConvert({name: 'Vasya'}, 'name'));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = []
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if(this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item),1)
  }
  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Vasya');
textStorage.addItem('Kolya');
textStorage.removeItem('Kolya');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Max'});
// objStorage.addItem({name: 'Manu'});
// objStorage.addItem({name: 'Vasya'});
// objStorage.removeItem({name: 'Manu'});
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Vasya', 'Kolya'];
// names.push('Petya');
// names.pop();