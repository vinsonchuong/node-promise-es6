import path from 'path';
import {fs} from 'node-promise-es6';
import install from 'jasmine-es6';
install();

describe('node-promise-es6', function() {
  describe('fs', function() {
    it('wraps fs with native promises', async function() {
      const dirContentsPromise = fs.readdir(path.resolve('src'));
      expect(dirContentsPromise instanceof Promise).toBe(true);

      const dirContents = await dirContentsPromise;
      expect(dirContents.sort())
        .toEqual(jasmine.arrayContaining(['index.js', 'fs.js']));
    });

    it('includes fs-extra', async function() {
      expect(await fs.readJson('package.json'))
        .toEqual(jasmine.objectContaining({name: 'node-promise-es6'}));
    });
  });
});
