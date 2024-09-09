// Strings

/** Error Message if module is not complete */
export function ErrorMessage(moduleName: string): string {
	return `Error creating module: ${moduleName}. No exports found, You must provide either a default export, named exports, or Type Definitions.`;
}
