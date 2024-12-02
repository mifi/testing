import { execa } from 'execa';

const process = execa('dir');
process.kill();
try {
  await process();
} catch (err) {
  console.log('process failed', err);
}
