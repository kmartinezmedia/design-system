const path = require('path');
const fs = require('fs');
const prettier = require('prettier');
const startsWith = require('lodash/startsWith');

const generateExportNames = async ({ files, defaults, wildcard, requires }) => {
  const filteredFiles = files
    .filter((file) => !startsWith(file, '.'))
    .filter((file) => !file.includes('index'))
    .filter((file) => file !== '');
  const firstLine = requires ? `module.exports = {\n` : '';
  const lastLine = +requires ? '\n}' : '';
  return (
    firstLine +
    filteredFiles
      .map((x, i) => {
        let name = x.split('.')[0];
        let extension = x.split('.')[1];
        let filename;
        const isLast = filteredFiles.length - 1 === i;
        if (extension !== undefined) {
          filename =
            extension === 'js' || extension === 'ts' || extension === 'tsx'
              ? name
              : x;
        } else {
          filename = x;
        }
        if (defaults) {
          return `export { default as ${name} } from "./${filename}";`;
        } else if (wildcard) {
          return `export * from "./${filename}";`;
        } else if (requires) {
          return `"${name}": require("./${filename}")${!isLast ? ',' : ''}`;
        }
      })
      .join('\n') +
    lastLine
  );
};

const getContents = async ({
  dir,
  defaults,
  wildcard,
  showExtension,
  requires,
}) => {
  let fileNames = [];
  await fs.readdirSync(dir).forEach(async (item) => {
    const contentPath = path.join(dir, item);
    if (fs.statSync(contentPath).isDirectory()) {
      getContents({
        dir: contentPath,
        defaults,
        wildcard,
        showExtension,
        requires,
      });
    }
    fileNames.push(item);
  });

  const fileContents = await generateExportNames({
    files: fileNames,
    defaults,
    wildcard,
    requires,
  });
  await fs.writeFileSync(
    path.join(dir, 'index.ts'),
    prettier.format(fileContents, {
      parser: 'babel',
      singleQuote: true,
      trailingComma: 'all',
      tabWidth: 2,
      useTabs: false,
      bracketSpacing: true,
    }),
  );
};

const generateExports = async ({
  dir,
  defaults = false,
  wildcard = false,
  showExtension = false,
  requires = false,
}) => {
  const directoryPath = path.join(process.cwd(), dir);
  await getContents({
    dir: directoryPath,
    defaults,
    wildcard,
    showExtension,
    requires,
  });
};

generateExports({ dir: 'src/app/utils', wildcard: true });
generateExports({ dir: 'src/app/screens', wildcard: true });
generateExports({ dir: 'src/app/hooks', wildcard: true });
