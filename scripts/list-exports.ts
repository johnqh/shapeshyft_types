/**
 * Print the sorted export names (types and values) of a TypeScript entry file.
 * Usage: bun run scripts/list-exports.ts src/index.ts
 */
import ts from "typescript";
import { resolve } from "node:path";

export function listExports(entry: string): string[] {
  const file = resolve(entry);
  const program = ts.createProgram([file], {
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    target: ts.ScriptTarget.ES2022,
    skipLibCheck: true,
  });
  const checker = program.getTypeChecker();
  const source = program.getSourceFile(file);
  if (!source) throw new Error(`Not found: ${file}`);
  const moduleSymbol = checker.getSymbolAtLocation(source);
  if (!moduleSymbol) throw new Error(`No module symbol for ${file}`);
  return checker
    .getExportsOfModule(moduleSymbol)
    .map(s => s.getName())
    .sort();
}

if (import.meta.main) {
  console.log(JSON.stringify(listExports(process.argv[2] ?? "src/index.ts"), null, 2));
}
