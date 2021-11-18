"use strict"
console.log('Regexp-гольф')
console.log('-----------------------------------------')
verify(/ca(r|t)/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop"]);

verify(/ferr(et|y|ari)/i,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/[a-z]ious\b/i,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\s(\.|\,|\:|\;)/,
    ["bad punctuation ,"],
    ["escape the dot"]);

verify(/\w{7,}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(/\b[a-df-z]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape"]);

function verify(regexp, yes, no) {
// Ignore unfinished exercises
if (regexp.source == "...") return;
yes.forEach(function(s) {
 if (!regexp.test(s))
   console.log("Не нашлось '" + s + "'");
});
no.forEach(function(s) {
 if (regexp.test(s))
   console.log("Неожиданное вхождение '" + s + "'");
});
}

console.log('-----------------------------------------')
console.log('-----------------------------------------')

console.log('Стиль цитирования')
console.log('-----------------------------------------')

let str = `Допустим, 'вы написали рассказ,' и везде для обозначения диалогов использовали одинарные кавычки. Теперь вы хотите заменить кавычки диалогов на двойные, и оставить одинарные в сокращениях слов типа aren’t.

Придумайте шаблон, различающий два этих использования кавычек, и напишите вызов метода replace, который производит замену.`
;
console.log(str.replace(/(^|\W)'|'($|\W)/g, '$1"$2'))
console.log('-----------------------------------------')
console.log('-----------------------------------------')

console.log('Снова числа')
console.log('-----------------------------------------')
// Впишите сюда регулярку.
var number = /^[+-]?(\d+$|\d+(\.|e\+|e-)?\d+(e\d|$)|\.\d+$|\d+\.$)/i;
 
// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Не нашла '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Неправильно принято '" + s + "'");
});

console.log('-----------------------------------------')
console.log('-----------------------------------------')


