import { lineBreak, newLine } from './formatters.ts';
import {
	exportDefaultTemplate,
	exportNamedTemplate,
	exportTypeTemplate,
	multiLineDescriptionTemplate,
	singleLineDescriptionTemplate,
} from './templates.ts';
import type { DefaultExport, NamedExports, TypeExports } from './types.ts';

// Builders

/** Build the default export */
export function buildDefaultExport(defaultExport: DefaultExport): string {
	let builtDefaultExport = '';
	const { typeDef, multiLineDescription, singleLineDescription } = defaultExport;

	// Add single line description if it exists
	if (singleLineDescription) {
		builtDefaultExport += singleLineDescriptionTemplate(singleLineDescription);
	}

	// Add multi-line description if it exists
	if (multiLineDescription) {
		builtDefaultExport += multiLineDescriptionTemplate(multiLineDescription);
	}

	// Add the default export
	builtDefaultExport += exportDefaultTemplate(typeDef);

	return builtDefaultExport;
}

/** Build the named exports */
export function buildNamedExports(namedExports: NamedExports[]): string {
	let builtNamedExports = '';
	for (const { typeDef: type, name, singleLineDescription, multiLineDescription } of namedExports) {
		// Add single line description if it exists
		if (singleLineDescription) {
			builtNamedExports += singleLineDescriptionTemplate(singleLineDescription);
		}

		// Add multi-line description if it exists
		if (multiLineDescription) {
			builtNamedExports += multiLineDescriptionTemplate(multiLineDescription);
		}

		// Add the named export
		builtNamedExports += exportNamedTemplate({ type, name });
	}
	return builtNamedExports;
}

/** Build the Type exports */
export function buildTypeExports(typeExports: TypeExports[]): string {
	let builtTypeExports = '';
	for (const { typeDef: type, name, singleLineDescription, multiLineDescription } of typeExports) {
		// Add single line description if it exists
		if (singleLineDescription) {
			builtTypeExports += singleLineDescriptionTemplate(singleLineDescription);
		}

		// Add multi-line description if it exists
		if (multiLineDescription) {
			builtTypeExports += multiLineDescriptionTemplate(multiLineDescription);
		}

		// Add the named export
		builtTypeExports += exportTypeTemplate({ type, name });
	}
	return builtTypeExports;
}

export function buildModule(moduleName: string, moduleDeclarations: string): string {
	return newLine(`declare module '${moduleName}' {`) + newLine(moduleDeclarations) + lineBreak('}');
}
