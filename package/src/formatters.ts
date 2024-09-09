// Formatting Utilities

/** Conform the indent of a string */
export function conformIndent(string: string): string {
	return `    ${string}`;
}

/** Add a new line to a string */
export function newLine(string: string): string {
	return `${string}\n`;
}

/** Add a Linebreak with a empty Line to a string */
export function lineBreak(string: string): string {
	return `${string}\n\n`;
}
