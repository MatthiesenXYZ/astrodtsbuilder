/** Type Definition for Default Exports */
export type DefaultExport = {
	/**
	 * Type Definition
	 *
	 * - If you are importing a Type "import('@my-example/module').ExampleModule"
	 * - If you are importing a function "typeof import('@my-example/module').ExampleModule"
	 */
	typeDef: string;
	/** A single line description of the default export */
	singleLineDescription?: string;
	/** A multi-line description of the default export */
	multiLineDescription?: string[];
};

/** Type Definition for Named Exports */
export type NamedExports = {
	/**
	 * Type Definition
	 *
	 * - If you are importing a Type "import('@my-example/module').ExampleType"
	 * - If you are importing a function "typeof import('@my-example/module').ExampleFunction"
	 */
	typeDef: string;
	/** The name of the exported function */
	name: string;
	/** A single line description of the export */
	singleLineDescription?: string;
	/** A multi-line description of the export */
	multiLineDescription?: string[];
};

/** Type Definition for Type Exports */
export type TypeExports = {
	/**
	 * Type Definition
	 *
	 * @example "import('@my-example/module').ExampleType"
	 */
	typeDef: string;
	/** The name of the exported Type */
	name: string;
	/** A single line description of the export */
	singleLineDescription?: string;
	/** A multi-line description of the export */
	multiLineDescription?: string[];
};

/** Type for Add Module Declarations for Building Declaration Files */
export type AddModuleDeclarations = {
	/** Default Export */
	defaultExport?: DefaultExport;
	/** Named Exports */
	namedExports?: NamedExports[];
	/** Type Exports */
	typeExports?: TypeExports[];
};

/** Shared Template Options */
export type SharedTemplateOptions = { type: string; name: string };

/** Astro 'config:setup:done` InjectedType */
export type InjectedType = {
	filename: string;
	content: string;
};
