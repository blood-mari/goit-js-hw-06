// Sort меняет исх массив, поэтому перед изменением нужно скопировать с помощью spread или Array.from(arr)

// 1) сортировка массива по кол-ву сообщений:
// [...users].sort((a, b) => a.message_count - b.message.count);

// 2) сортировка массива по имени пользователя:
// [...users].sort((a, b) => a.first_name.localCompare(b.first_name));