import { ParserContext, Result } from '../../services/parser';

export function LfParser(ctx: ParserContext): Result<RegExpExecArray> {
	return ctx.regex(/^(\r\n|[\r\n])/);
}

export function lineEndParser(ctx: ParserContext): Result<null> {
	const match = ctx.choice([
		LfParser,
		() => ctx.eof() ? ctx.ok(null) : ctx.fail(),
	]);

	if (!match.ok) {
		return ctx.fail();
	}

	return ctx.ok(null);
}

export function ensureAllowedBackChar(ctx: ParserContext): boolean {
	// 一つ前の文字が:
	// 無い OR 改行 OR スペース OR ![a-z0-9]i
	// の時にtrueを返します。

	if (ctx.pos === 0) {
		return true;
	}
	if (ctx.pos >= 2 && ctx.matchStr('\r\n', -2)) {
		return true;
	}
	if (ctx.matchRegex(/^[\r\n \u3000\t\u00a0]/, -1)) {
		return true;
	}
	if (!ctx.matchRegex(/^[a-z0-9]/i, -1)) {
		return true;
	}
	return false;
}

export function ensureAllowedNextChar(ctx: ParserContext): boolean {
	// 文字が:
	// 無い OR 改行 OR スペース OR ![a-z0-9]i
	// の時にtrueを返します。

	if (ctx.eof()) {
		return true;
	}
	if (ctx.matchStr('\r\n')) {
		return true;
	}
	if (ctx.matchRegex(/^[\r\n \u3000\t\u00a0]/)) {
		return true;
	}
	if (!ctx.matchRegex(/^[a-z0-9]/i)) {
		return true;
	}
	return false;
}
