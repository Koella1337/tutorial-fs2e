import { fs2e } from "./module/config.js";
import Fs2ItemSheet from "./module/sheets/Fs2ItemSheet.js";
import Fs2NamedCharacterSheet from "./module/sheets/Fs2NamedCharacterSheet.js";

async function preloadHandlebarsTemplates() {
	const templatePaths = [
		"systems/tutorial-fs2e/templates/partials/character-stat-block.hbs",
		"systems/tutorial-fs2e/templates/partials/weapon-card.hbs"
	];

	return loadTemplates(templatePaths);
}

Hooks.once("init", function() {
	console.log("fs2e | Initialising Feng Shui 2 System");

	// ----- CONFIG -----
	CONFIG.fs2e = fs2e;

	// ----- Sheets -----
	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("fs2e", Fs2ItemSheet, { makeDefault: true });

	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("fs2e", Fs2NamedCharacterSheet, { makeDefault: true });

	// ----- Handlebars -----
	preloadHandlebarsTemplates();

	Handlebars.registerHelper("times", (n, content) => {
		let result = "";
		for (let i = 0; i < n; i++) {
			result += content.fn(i);
		}
		return result;
	})
});