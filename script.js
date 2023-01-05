import templateBuilder from "./templatebuilder.js";

// Список шаблонов: название: файл
const templatesList = {
	'blueberry': "template_blueberry.html",
	'cranberry': "template_cranberry.html",
	'strawberry': "template_strawberry.html"
};

const workBlock=document.getElementById('workBlock');

// Импортирует шаблоны
templateBuilder.importTemplates(templatesList);
// Это чтобы экземпляр класса был доступен из консоли браузера
window.templateBuilder = templateBuilder;

// Шаблон blueberry - случайный текст
document.getElementById('btn1').addEventListener('click', ()=>{
	const values = {
		text:templateBuilder.randomText()
	}
	templateBuilder.buildFromTemplate(workBlock, 'blueberry', values);
});

// Шаблон cranberry - два случайных числа
document.getElementById('btn2').addEventListener('click', ()=>{
	const values = {
		number1:templateBuilder.randomNumber(),
		number2:templateBuilder.randomNumber()
	}
	templateBuilder.buildFromTemplate(workBlock, 'cranberry', values);
});

// Шаблон strawberry - табличка со случайным текстом
document.getElementById('btn3').addEventListener('click', ()=>{
	const values = {
		putTextHere:templateBuilder.randomText(),
	}
	templateBuilder.buildFromTemplate(workBlock, 'strawberry', values);
});