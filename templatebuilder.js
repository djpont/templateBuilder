export default new class {
	templates = {}; // тут будут хранитьс шаблоны в виде текста
	
	constructor() {
	}
	
	// Импортирование шаблонов из файлов
	async importTemplates(templatesList) {
		for (const templateName of Object.keys(templatesList)) {
			await fetch(templatesList[templateName])
				.then(d => d.text())
				.then(d => {
					this.templates[templateName] = d;
				});
		}
		return true;
	}
	
	// Создание DOM-элемента из шаблона и замена значений
	buildFromTemplate = (parentElement, templateName, values = {}) => {
		const html = (new DOMParser).parseFromString(this.templates[templateName], "text/html");
		const template = html.body.firstChild;
		Object.entries(values).forEach(([infoName, infoValue]) => {
			template.querySelector(`[info='${infoName}']`).innerHTML = infoValue;
		});
		parentElement.append(template);
	}
	
	randomText = () => Math.random().toString(36).substring(2, 10);
	randomNumber = () => Math.floor(Math.random() * 100000000);
}