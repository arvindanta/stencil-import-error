import { Config } from '@stencil/core';

import { reactOutputTarget } from 'react-output-target';

export const config: Config = {
  buildEs5: true,
  extras: {
    appendChildSlotFix: true,
    cssVarsShim: true,
    dynamicImportShim: true,
    initializeNextTick: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
    cloneNodeFix: true,
    slotChildNodesFix: true,
  },
  enableCache: true,
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
