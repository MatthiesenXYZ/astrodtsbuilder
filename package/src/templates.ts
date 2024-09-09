import { conformIndent, newLine } from './formatters.ts';
import type { SharedTemplateOptions } from './types.ts';

// Templates

/** Add a single line comment to the declaration file */
export function singleLineDescriptionTemplate(description: string): string {
	return newLine(conformIndent(`/** ${description} */`));
}

/** Add a multi-line comment to the declaration file */
export function multiLineDescriptionTemplate(description: string[]): string {
	let multiLineDescription = '';

	multiLineDescription += newLine(conformIndent('/**'));

	for (const line of description) {
		multiLineDescription += newLine(conformIndent(` * ${line}`));
	}

	multiLineDescription += newLine(conformIndent(' */'));

	return multiLineDescription;
}

/** Add a named export to the declaration file */
export function exportNamedTemplate({ name, type }: SharedTemplateOptions): string {
	return newLine(conformIndent(`export const ${name}: ${type};`));
}

/** Add a non-exported variable to the declaration file */
export function nonExportedTemplate({ name, type }: SharedTemplateOptions): string {
	return newLine(conformIndent(`const ${name}: ${type};`));
}

/** Add a default export to the declaration file */
export function defaultExportTemplate(name: string): string {
	return newLine(conformIndent(`export default ${name};`));
}

/** Add a default export to the declaration file */
export function exportDefaultTemplate(type: string): string {
	return (
		nonExportedTemplate({ type, name: 'defaultExport' }) + defaultExportTemplate('defaultExport')
	);
}

/** Add a type export to the declaration file */
export function exportTypeTemplate({ name, type }: SharedTemplateOptions): string {
	return newLine(conformIndent(`export type ${name} = ${type};`));
}
