import React from 'react';

import { FileExplorer } from '../components/FileExplorer';
import { Preview } from '../components/Preview';
import { CodeEditor } from '../components/CodeEditor';
import { SandpackProvider } from '../utils/sandpack-context';
import { SandpackLayout } from '../components/SandpackLayout';

export default {
  title: 'presets/Custom Sandpack',
};

export const CustomEditor = () => (
  <SandpackProvider
    files={{
      '/index.js': {
        code: `document.body.innerHTML = \`<div>This is a test</div>\``,
      },
      '/src/test.jsx': {
        code: 'console.log("Hello")',
      },
      '/src/rest.js': {
        code: 'console.log("Rest")',
      },
    }}
    dependencies={{}}
    openPaths={['/index.js']}
    entry="/index.js"
  >
    <SandpackLayout>
      <FileExplorer />
      <div>
        <CodeEditor showTabs />
        <Preview />
      </div>
    </SandpackLayout>
  </SandpackProvider>
);
