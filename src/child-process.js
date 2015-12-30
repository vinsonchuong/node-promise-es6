import childProcess from 'child_process';
import promisify from 'node-promise-es6/promisify';

// export * from 'child_process';
/* eslint-disable */
export const fork = childProcess.fork;
export const spawn = childProcess.spawn;
export const spawnSync = childProcess.spawnSync;
export const execFileSync = childProcess.execFileSync;
export const execSync = childProcess.execSync;
/* eslint-enable */

export const exec = promisify(childProcess.exec, ['stdout', 'stderr']);
export const execFile = promisify(childProcess.execFile, ['stdout', 'stderr']);
