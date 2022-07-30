export default class Fs2ItemSheet extends ItemSheet {

	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			width: 530,
			height: 340,
			classes: ["fs2e", "sheet", "item"]
		});
	}

	get template() {
		const path = "systems/tutorial-fs2e/templates/items";
		return `${path}/${this.item.data.type}.hbs`
	}

	async getData(options) {
		const data = super.getData(options);
		const itemData = data.data;
		data.item = itemData;
		data.data = itemData.data;
		data.config = CONFIG.fs2e;
		return data;
	}

}
