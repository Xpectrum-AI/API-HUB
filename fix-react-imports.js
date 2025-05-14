const fs = require('fs');
const path = require('path');

const uiComponentsDir = path.join(__dirname, 'src', 'components', 'ui');

// Common React types and functions used in UI components
const reactImports = [
  'forwardRef',
  'ElementRef',
  'ComponentPropsWithoutRef',
  'ComponentProps',
  'HTMLAttributes',
  'TextareaHTMLAttributes',
  'ButtonHTMLAttributes',
  'InputHTMLAttributes',
  'ReactElement',
  'ReactNode',
  'useState',
  'useEffect',
  'useRef',
  'useCallback',
  'useMemo'
];

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if no React import
  if (!content.includes('import * as React')) {
    return;
  }

  // Get used React types and functions
  const usedImports = reactImports.filter(importName => 
    content.includes(`React.${importName}`) || 
    content.includes(`React.${importName.toLowerCase()}`)
  );

  // Replace React namespace import with named imports
  content = content.replace(
    /import\s+\*\s+as\s+React\s+from\s+["']react["']/g,
    `import { ${usedImports.join(', ')} } from "react"`
  );

  // Replace React namespace usage
  content = content.replace(/React\./g, '');

  // Clean up any double spaces or empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  fs.writeFileSync(filePath, content, 'utf8');
}

// Get all TypeScript files in the UI components directory
const files = fs.readdirSync(uiComponentsDir)
  .filter(file => file.endsWith('.tsx'));

// Update each file
files.forEach(file => {
  const filePath = path.join(uiComponentsDir, file);
  console.log(`Updating ${file}...`);
  try {
    updateFile(filePath);
    console.log(`✓ Successfully updated ${file}`);
  } catch (error) {
    console.error(`✗ Error updating ${file}:`, error.message);
  }
});

console.log('\nAll UI components have been updated!'); 