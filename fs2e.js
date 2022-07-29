import { fs2e } from "./module/config.js";
import Fs2ItemSheet from "./module/sheets/Fs2ItemSheet.js";

Hooks.once("init", function() {
	console.log("fs2e | Initialising Feng Shui 2 System");

	CONFIG.fs2e = fs2e;

	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("fs2e", Fs2ItemSheet, { makeDefault: true });
});