import path from 'path';
import {fs, childProcess} from 'node-promise-es6';
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

  describe('child_process', function() {
    it('wraps child_process.exec with a native promise', async function() {
      const {stdout} = await childProcess.exec('ls .');
      expect(stdout.trim().split('\n'))
        .toEqual(jasmine.arrayContaining(['package.json', 'README.md']));
    });

    it('wraps child_process.execFile with a native promise', async function() {
      const {stdout} = await childProcess.execFile('ls', ['.']);
      expect(stdout.trim().split('\n'))
        .toEqual(jasmine.arrayContaining(['package.json', 'README.md']));
    });
  });
});
