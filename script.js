// Функция для запроса имени у пользователя и вывода приветствия
function greetUser() {
    // Запросить имя у пользователя с помощью prompt
    var userName = prompt("Введите ваше имя:");

    // Проверить, было ли введено имя
    if (userName !== null && userName !== "") {
        // Вывести приветствие на странице
        document.write("Привет, " + userName + "!");
    } else {
        // Если имя не введено, вывести сообщение об ошибке
        document.write("Вы не ввели имя!");
    }
}

// Вызвать функцию при загрузке страницы
greetUser();