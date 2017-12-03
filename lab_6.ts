class Lab_6 {
  private array: number[] = [];

  constructor(array: number[]) {
    this.array = array;
  }

  public getResult(k: number) {
    let sum = 0;
    this.array.forEach((value, index) => {
      if (k <= index) {
        sum += value;
      }
    });

    return sum / (this.array.length - k);
  }

}

let array1 = [0.30,	0.40,	0.50,	0.60,	0.68,	0.68,	0.68,	0.68,	0.68,	0.68,	0.70,];
let array2 = [0.12,	0.15,	0.21,	0.28,	0.37,	0.47,	0.58,	0.68,	0.68,	0.68,	0.68,];
let array3 = [0.0,	0.08,	0.14,	0.21,	0.3,	0.4,	0.51,	0.64,	0.77,	0.78,	0.68,];
let array4 = [0.0,	0.03,	0.09,	0.16,	0.25,	0.35,	0.46,	0.59,	0.72,	0.78,	0.68,];
let array5 = [0.12,	0.15,	0.21,	0.28,	0.37,	0.47,	0.50,	0.50,	0.50,	0.50,	0.87,];

let array = array5;
const lab6 = new Lab_6(array);

let result = 0;
for (let i = 0; i < array.length; ++i) {
  let d = array[i];
  if (i > 0) {
    d = array[i] - array[i - 1];
  }
  if (d == 0) {
    continue;
  }
  let f = lab6.getResult(i);
  result += d * f;
  console.log('i = ' + i + '; d = ' + d + ": " + f + "; (a, b) = " + `(${array[i - 1]}, ${array[i]})` );
}

console.log('result: ' + result / (Math.max(...array)));
