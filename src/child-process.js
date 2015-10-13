import childProcess from 'child_process';
import promisify from 'node-promise-es6/promisify';

export * from 'child_process';

export const exec = promisify(childProcess.exec, ['stdout', 'stderr']);
export const execFile = promisify(childProcess.execFile, ['stdout', 'stderr']);
