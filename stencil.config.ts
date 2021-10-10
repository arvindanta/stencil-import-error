import { Config } from '@stencil/core';

import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  enableCache:false,
  namespace: 'import-error',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'import-error', // name in the package.json should be used
      proxiesFile: './react-core/src/components.ts',

      // lazy load -> code splitting
      //includeDefineCustomElements: true,
      // includePolyfills: true,

      // tree shakable, need to use setassetpath
      customElementsDir: 'dist/components',
      includeImportCustomElements: true,
    }),
  ],
};
