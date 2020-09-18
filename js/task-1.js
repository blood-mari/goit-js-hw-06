
const users =  [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// Write code under this line

// 1. Задача 6-1 map Получи массив имен всех пользователей (свойство name) используя деструктурирующее присваивание для параметра функции ({name}) без пробелов и переносов на новую строку.

const getUserNames = array => array.map(({name}) => name);

console.log('1st task',getUserNames(users));

// 2. filter. Получи массив объектов пользователей, отобранный по цвету глаз (свойство eyeColor), используя деструктурирующее присваивание для параметра функции ({eyeColor}) без пробелов и переносов на новую строку.

const getUsersWithEyeColor = (array, сolor) => array.filter(({ eyeColor }) => eyeColor === сolor);

console.log('2nd task: eyecolor',getUsersWithEyeColor(users, 'blue'));

// 3. filter, map. Получи массив имен пользователей (значение свойства name) по полу (значение свойства gender.

const getUsersWithGender = (array, gender) => array.filter(el => el.gender === gender).map(({name}) => name);

console.log('3th task: gender', getUsersWithGender(users, 'male'));

//  4. filter и оператор !  Получи массив только неактивных пользователей (отфильтруй по значению свойства isActive). Используй деструктурирующее присваивание для параметра функции ({isActive})

const getInactiveUsers = array => array.filter(({ isActive }) => !isActive);

console.log('4th task: notActive',getInactiveUsers(users));

// 5. Получи объект пользователя (не массив) по уникальному значению свойства email. Используй деструктурирующее присваивание для параметра функции({ email }) без пробелов и переносов на новую строку.

const getUserWithEmail = (array, mail) => array.find(({ email }) => email === mail);

console.log('5th task: user with email',getUserWithEmail(users, 'moorehensley@indexia.com'));

// 6. Получи массив из объектов, которые состоят только из свойств name и email тех пользователей, которые попадают в возрастную категорию от min до max лет (значение свойства age).

const getUsersWithAge = (array, min, max) => array
 .filter(({age}) => age > min && age < max)
 .map(({name, email}) => ({name, email}));

console.log('6th task: Age',getUsersWithAge(users, 20, 30));

// 7. reduce Получи общую сумму баланса (сумму значений свойства balance) всех пользователей. Используй деструктурирующее присваивание для параметра функции {balance}

const calculateTotalBalance = array => array.reduce((acc, {balance}) => acc + balance, 0,);

console.log('Total balance =', calculateTotalBalance(users));

// 8. filter, includes и map. Получи массив имен всех пользователей у которых есть друг с заданным именем.Используй деструктурирующее присваивание для параметра функции {friends} и ({name})

const getUsersWithFriend = (array, friendName) => array.filter(({friends}) => friends.includes(friendName)).map(({name}) => name);

console.log('8th task [Friends]',getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

// 9. sort и map. Получи массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = (array) => [...array].sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);


console.log('9th task [Amount of friends]', getNamesSortedByFriendsCount(users));

// 10. reduce, filter, sort. Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (array) => array.reduce((acc, user) => [...acc, ...user.skills], []).filter((item, index, arr) => arr.indexOf(item) === index).sort((a,b) => a.localeCompare(b));

console.log('10th task [SortBySkills]', getSortedUniqueSkills(users));