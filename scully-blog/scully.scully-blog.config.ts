import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-blog",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles-"
      }
    },
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: "./blog"
      }
    },
  }
};
