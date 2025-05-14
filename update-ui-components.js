const fs = require('fs');
const path = require('path');

const uiComponentsDir = path.join(__dirname, 'src', 'components', 'ui');

// Function to update React imports in a file
function updateReactImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Get all React types and functions used in the file
  const reactTypes = new Set();
  
  // Check for React namespace usage
  if (content.includes('React.')) {
    // Add commonly used React types and functions
    reactTypes.add('forwardRef');
    reactTypes.add('ElementRef');
    reactTypes.add('ComponentPropsWithoutRef');
    reactTypes.add('ComponentProps');
    reactTypes.add('HTMLAttributes');
    reactTypes.add('ReactElement');
    reactTypes.add('ReactNode');
    reactTypes.add('useState');
    reactTypes.add('useEffect');
    reactTypes.add('useRef');
    reactTypes.add('useCallback');
    reactTypes.add('useMemo');
  }
  
  // Replace React namespace imports with named imports
  if (content.includes('import * as React')) {
    const imports = Array.from(reactTypes).join(', ');
    content = content.replace(
      /import\s+\*\s+as\s+React\s+from\s+["']react["']/g,
      `import { ${imports} } from "react"`
    );
  }
  
  // Replace React namespace usage with direct usage
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
    updateReactImports(filePath);
    console.log(`✓ Successfully updated ${file}`);
  } catch (error) {
    console.error(`✗ Error updating ${file}:`, error.message);
  }
});

console.log('\nAll UI components have been updated!'); 