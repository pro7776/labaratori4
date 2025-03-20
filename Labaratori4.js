function ask_password(login, password, success, failure) {
    // Приводим логин и пароль к нижнему регистру
    login = login.toLowerCase();
    password = password.toLowerCase();

    // Гласные буквы
    const vowels = 'aeiouy';
    // Создаем массив для согласных
    let loginConsonants = [];
    let passwordConsonants = [];

    // Проверяем количество гласных в пароле
    let vowelCount = 0;
    for (let char of password) {
        if (vowels.includes(char)) {
            vowelCount += 1;
        } else if (char.match(/[a-z]/)) { // Убеждаемся, что это буква
            passwordConsonants.push(char);
        }
    }

    // Согласные логина
    for (let char of login) {
        if (!vowels.includes(char)) {
            loginConsonants.push(char);
        }
    }

    // Проверяем условия
    const wrongNumberOfVowels = vowelCount !== 3;
    const wrongConsonants =
        JSON.stringify(loginConsonants) !== JSON.stringify(passwordConsonants);

    // Определяем сообщение об ошибке
    if (wrongNumberOfVowels && wrongConsonants) {
        failure(login, "Everything is wrong");
    } else if (wrongNumberOfVowels) {
        failure(login, "Wrong number of vowels");
    } else if (wrongConsonants) {
        failure(login, "Wrong consonants");
    } else {
        success(login);
    }
}

function main(login, password) {
    ask_password(login, password,
        function(user) {
            console.log(`Привет, ${user}!`);
        },
        function(user, error) {
            console.log(`Кто-то пытался притвориться пользователем ${user}, но в пароле допустил ошибку: ${error.toUpperCase()}.`);
        }
    );
}

// Пример использования
main("login", "aaalgn"); // Привет, login!
main("login", "luagon"); // Привет, login!
main("login", "lugan"); // Кто-то пытался притвориться пользователем login, но в пароле допустил ошибку: WRONG NUMBER OF VOWELS.



//2 задание

// Асинхронные функции
function readConfig(name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded');
        callback();
    }, Math.floor(Math.random() * 1000));
}

function doQuery(statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement);
        callback();
    }, Math.floor(Math.random() * 1000));
}

function httpGet(url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url);
        callback();
    }, Math.floor(Math.random() * 1000));
}

function readFile(path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded');
        callback();
    }, Math.floor(Math.random() * 1000));
}

function callback() {
    console.log('It is done!');
}

// Последовательный вызов функций
/*
console.log('start');

readConfig('myConfig', () => {
    doQuery('select * from cities', () => {
        httpGet('http://google.com', () => {
            readFile('README.md', () => {
                console.log('It is done!');
            });
        });
    });
});

console.log('end');

function notify(next) {
    return function () {
        next();
    };
}

console.log('start');

readConfig('myConfig', notify(() =>
    doQuery('select * from cities', notify(() =>
        httpGet('http://google.com', notify(() =>
            readFile('README.md', notify(() =>
                console.log('It is done!')
            ))
        ))
    ))
));

console.log('end'); */



//3 задание


function f1(x, callback) {
    setTimeout(() => {
        const result = x * x; // f1(x) = x^2
        console.log(`f1(${x}) = ${result}`);
        callback(result);
    }, Math.random() * 1000);
}

function f2(x, callback) {
    setTimeout(() => {
        const result = 2 * x; // f2(x) = 2x
        console.log(`f2(${x}) = ${result}`);
        callback(result);
    }, Math.random() * 1000);
}

function f3(x, callback) {
    setTimeout(() => {
        const result = -2; // f3(x) = -2
        console.log(`f3(${x}) = ${result}`);
        callback(result);
    }, Math.random() * 1000);
}

function calculateF(x, n, functionsForN6) {
    let currentResult = 0;

    const functions = functionsForN6.slice(0, n); // Отобрать только n функций

    function executeFunction(index) {
        if (index < functions.length) {
            functions[index](x, (result) => {
                currentResult += result; // Обновляем промежуточный результат
                console.log(`Промежуточный результат после f${index + 1}: ${currentResult}`);
                executeFunction(index + 1); // Вызываем следующую функцию
            });
        } else {
            console.log(`Итоговое значение F(${x}) = ${currentResult}`);
        }
    }

    executeFunction(0); // Начинаем с первой функции
}


function f4(x, callback) {
    setTimeout(() => {
        const result = x + 1; // f4(x) = x + 1
        console.log(`f4(${x}) = ${result}`);
        callback(result);
    }, Math.random() * 1000);
}



function f5(x, callback) {
    setTimeout(() => {
        const result = 3 * x; // f5(x) = 3x
        console.log(`f5(${x}) = ${result}`);
        callback(result);
    }, Math.random() * 1000);
}

function f6(x, callback) {
    setTimeout(() => {
        const result = 4; // f6(x) = 4
        console.log(`f6(${x}) = ${result}`);
        callback(result);
    }, Math.random() * 1000);
}

const functionsForN6 = [f1, f2, f3, f4, f5, f6]; // Добавляем все функции
calculateF(3, 6, functionsForN6); // Вычисляем F(3) для n=6











