// Геттеры и сеттеры

class Example {
    get prop() {
        console.log('Вызов геттера');

        return 'Значение get';
    }

    set prop(value) {
        console.log('Значение сеттера', value);

        const isValid = value.length > 5;

        if (isValid) {
            this._secret_prop = value;
        }
         throw new Error('error');
    }
}

const obj = new Example();
console.log(obj.prop)

// Codewars task

/**
 * [2, 5, 1, 6, 8, 0, 3, 4, 9, 7]
 * нужно получить
 * [2, 1, 3, 6, 8, 0, 5, 4, 7, 9]
 */

// 1. Фильтруем массив, оставляем только нечётные
// 2. Полученный массив сортируем
// 3. Берём чётные числа из исходного массива и вставляем в соотв. индексы (splice)

function funnySort(array) {
    // 1. Фильтруем массив, оставляем только нечётные
    const odds = array.filter(el => el % 2 === 1);

    // 2. Полученный массив сортируем
    odds.sort((a, b) => a - b);

    array.forEach((el, index) => {
      // 3. Берём чётные числа из исходного массива
      if (el % 2 === 0) {
        // 4. вставляем в соотв. индексы (splice)
        odds.splice(index, 0, el);
      }
    });

    return odds;
  }

  const sourceArr = [2, 5, 1, 6, 8, 0, 3, 4, 9, 7];
  const targetArr = [2, 1, 3, 6, 8, 0, 5, 4, 7, 9];

  console.log(JSON.stringify(funnySort(sourceArr)) === JSON.stringify(targetArr));
  console.log(funnySort(sourceArr));