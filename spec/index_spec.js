import path from 'path';
import {fs, childProcess} from 'node-promise-es6';

describe('node-promise-es6', () => {
  describe('fs', () => {
    it('wraps fs with native promises', async () => {
      const dirContentsPromise = fs.readdir(path.resolve(__dirname, '../src'));
      expect(dirContentsPromise instanceof Promise).toBe(true);

      const dirContents = await dirContentsPromise;
      expect(dirContents.sort())
        .toEqual(jasmine.arrayContaining(['index.js', 'fs.js']));
    });

    it('re-exports the non-async fs functions', () => {
      expect(fs.watch).toBeDefined();
      expect(fs.createReadStream).toBeDefined();
      expect(fs.renameSync).toBeDefined();
    });
  });

  describe('child_process', () => {
    it('wraps child_process.exec with a native promise', async () => {
      const {stdout} = await childProcess.exec(`ls '${path.resolve(__dirname, '../')}'`);
      expect(stdout.trim().split('\n'))
        .toEqual(jasmine.arrayContaining(['package.json', 'README.md']));
    });

    it('wraps child_process.execFile with a native promise', async () => {
      const {stdout} = await childProcess.execFile('ls', [path.resolve(__dirname, '../')]);
      expect(stdout.trim().split('\n'))
        .toEqual(jasmine.arrayContaining(['package.json', 'README.md']));
    });
  });
});
