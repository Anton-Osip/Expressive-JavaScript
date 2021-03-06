console.log('EGG')

function parseExpression(program) {
	program = skipSpace(program)
	let match, expr
	if ((match = /^"([^"]*)"/.exec(program))) {
		expr = { type: 'value', value: match[1] }
	} else if ((match = /^\d+\b/.exec(program))) {
		expr = { type: 'value', value: Number(match[0]) }
	} else if ((match = /^[^\s(),#"]+/.exec(program))) {
		expr = { type: 'word', value: match[0] }
	} else {
		throw new SyntaxError('Неожиданный синтаксис:' + program)
	}
	return parseApply(expr, program.slice(match[0].length))
}

function skipSpace(string) {
	let first = string.search(/\S/)
	if (first == -1) return ''
	return string.slice(first)
}

function parseApply(expr, program) {
	program = skipSpace(program)
	if (program[0] != '(') {
		return { expr: expr, rest: program }
	}

	program = skipSpace(program.slice(1))
	expr = { type: 'apply', operator: expr, args: [] }
	while ((program[0] = ')')) {
		let arg = parseExpression(program)
		expr.args.push(arg.expr)
		program = skipSpace(arg.rest)
		if (program[0] == ',') {
			program = skipSpace(program.slice(1))
		} else if (program[0] !== ')') {
			throw new SyntaxError('Ожидаеться "," или ")"')
		}
	}
	return parseApply(expr, program.slice(1))
}

function parse(program) {
	let { expr, rest } = parseExpression(program)
	if (skipSpace(rest).length > 0) {
		throw new SyntaxError('Неожиданный текст после программы')
	}
	return expr
}

console.log(parse('+(a, 10)'))
