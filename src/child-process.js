import childProcess from 'child_process';
import promisify from 'node-promise-es6/promisify';

export const exec = promisify(childProcess.exec, ['stdout', 'stderr']);
export const execFile = promisify(childProcess.execFile, ['stdout', 'stderr']);
