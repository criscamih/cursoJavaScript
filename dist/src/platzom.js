"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
//cambiando letras en palabras para manejo de strings en js
function platzom(str) {
	var translation = str;
	if (terminaenAR(translation)) {
		translation = translation.slice(0, -2);
	}
	if (empiezaconZ(translation)) {
		translation += "pe";
	}
	if (translation.length >= 10) {
		translation = tienemasdediezLetras(translation);
	}
	if (translation == esPalindromo(translation)) {
		return intercaMayus(translation);
	}

	return translation;
}

function terminaenAR(str) {
	var valor = str.toLowerCase().endsWith("ar") ? true : false;
	return valor;
}

function empiezaconZ(str) {
	var valor = str.toLowerCase().startsWith("z") ? true : false;
	return valor;
}

function tienemasdediezLetras(str) {
	//var arreglo=str.split('');
	var tamaño = str.length;
	var mitad1 = str.slice(0, Math.round(tamaño / 2));
	var mitad2 = str.slice(Math.round(tamaño / 2));
	var translation = mitad1 + "-" + mitad2;

	return translation;
}

function esPalindromo(str) {
	var arreglo = str.split('');
	var trans = arreglo.reverse();
	var translation = trans.join('');

	return translation;
}

function intercaMayus(str) {
	var tamaño = str.length;
	var validar = true;
	var translation = '';

	for (var i = 0; i < tamaño; i++) {
		var char = str.charAt(i);
		translation += validar ? char.toUpperCase() : char.toLowerCase();
		validar = !validar;
	}
	return translation;
}