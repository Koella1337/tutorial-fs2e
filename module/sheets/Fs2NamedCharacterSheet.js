export default class Fs2NamedCharacterSheet extends ActorSheet {

	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			template: "systems/tutorial-fs2e/templates/actors/namedCharacter.hbs",
			classes: ["fs2e", "sheet", "namedCharacter"]
		});
	}

	async getData(options) {
		const data = super.getData(options);
		const actorData = data.data;
		data.actor = actorData;
		data.data = actorData.data;
		data.config = CONFIG.fs2e;

		data.weapons = data.items.filter(item => item.type == "weapon");
		return data;
	}

}
