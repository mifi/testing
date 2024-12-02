import { execa } from 'execa';

const process = execa('dir');
process.kill();
