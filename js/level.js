// Запрашиваем данные у пользователя

// const numLevels = parseInt(prompt('Введите количество уровней объекта:')),
// 	data = []

// Создаем многомерный объект
// for (let i = 0; i < numLevels; i++) {
// 	const level = {},
// 		numKeys = parseInt(prompt(`Введите количество ключей для уровня ${i + 1}:`))

// 	for (let j = 0; j < numKeys; j++) {
// 		const key = prompt(`Введите ключ ${j + 1} для уровня ${i + 1}:`),
// 			value = prompt(`Введите значение для ключа ${key}:`)
// 		level[key] = value
// 	}

// 	data.push(level)
// }

// console.log(data)

/* <- === === === === === === === === === === === === === ===  Задачи  === === === === === === === === === === === === === === -> */

// const head = {
// 	name: 'Head',
// 	children: [],
// }
// function addChildren(parent, childNames){
// 	childNames.forEach(name => {
// 		const child = {
// 			name: name,
// 			parent: parent
// 		}
// 		parent.children.push(child)
// 	});
// }
// const childNames = ['Child 1', 'Child 2', 'Child 3', 'Child 4', 'Child 5',]
// addChildren(head, childNames)

// console.log(head)

// const numLevels = parseInt(prompt("Введите количество уровней объекта:")),
// 					data = []

// Создаем многомерный объект
// for (let i = 0; i < numLevels; i++) {
//   const level = {},
// 								numKeys = parseInt(prompt(`Введите количество ключей для уровня ${i + 1}:`))

//   for (let j = 0; j < numKeys; j++) {
//     const key = prompt(`Введите ключ ${j + 1} для уровня ${i + 1}:`),
// 										value = prompt(`Введите значение для ключа ${key}:`)
//     level[key] = value
//   }

//   data.push(level)
// }

// console.log(data)

// const head = {
// 	name: 'Head',
// 	children: [],
// }

// function addChildren(parent, childrenNames) {
// 	childrenNames.forEach(name => {
// 		const child = {
// 			name: name,
// 			parent: parent,
// 		}
// 		parent.children.push(child)
// 	})
// }

// const childNames = [
// 	'Children 1',
// 	'Children 2',
// 	'Children 3',
// 	'Children 4',
// 	'Children 5',
// ]

// addChildren(head, childNames)

// console.log(head)
// console.log(JSON.stringify(head, null, 1))

/* // Отслеживание клавиатуры
document.addEventListener('keydown', function(event) {
	console.log(`Клавиша ${event.key} нажата. Код: ${event.code}`);
});

document.addEventListener('keyup', function(event) {
	console.log(`Клавиша ${event.key} отпущена. Код: ${event.code}`);
});

// Отслеживание мыши
document.addEventListener('click', function(event) {
	console.log(`Клик по координатам: (${event.clientX}, ${event.clientY})`);
});

document.addEventListener('mousemove', function(event) {
	console.log(`Мышь перемещена на координаты: (X: ${event.clientX}, Y: ${event.clientY})`);
});

document.addEventListener('mousedown', function(event) {
	console.log(`Кнопка мыши ${event.button} нажата`);
});

document.addEventListener('mouseup', function(event) {
	console.log(`Кнопка мыши ${event.button} отпущена`);
}); */

/* Sudoku */
// function sudoku(puzzle){

// }


// <- === === === === === === ===  Задача === === === === === === === ->
/* function startStopClearBtn(){
	const startBtn = document.getElementById('controlButton'),
	resultBtn = document.getElementById('resultButton')
	
	
	let isRunning = false
	let results = []
	
	startBtn.addEventListener('click', () => {
		if (isRunning) {
			// Остановка функции
			isRunning = false
			startBtn.textContent = 'Clear'
			resultBtn.disabled = true // Отключаем кнопку Result
			console.log('Функция остановлена')
		} else {
			if (startBtn.textContent === 'Clear') {
				// Очистка результатов
				results = []
				console.log('Результаты очищены')
				startBtn.textContent = 'Start' // Возвращаем текст кнопки на Start
			} else {
				// Запуск функции
			isRunning = true
			startBtn.textContent = 'Stop'
			resultBtn.disabled = false // Включаем кнопку Result
			console.log('Функция запущена')
			// Здесь можно добавить код для выполнения задачи
		}
	}
})

resultBtn.addEventListener('click', () => {
	if (isRunning) {
		// Записываем результат только если функция запущена
		results.push('Результат: ' + new Date().toLocaleTimeString())
		console.log(results)
	}
})
} */
// <- === === === === ===  Задача end  === === === === === ->

/* <- === === === === === === === === === === === === === === === === === === === ===  Тема  === === === === === === === === === === === === === === === === === === === === -> */
/* <- === === === === === === === === === === === === === ===  Тема end  === === === === === === === === === === === === === === -> */

// === === === === === === === === === === === === === ===  Под тема  === === === === === === === === === === === === === ===
// === === === === === === === === === === ===  Под тема end === === === === === === === === === === ===

// <- === === === === === === ===  Задача === === === === === === === ->
// <- === === === === ===  Задача end  === === === === === ->