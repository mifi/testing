import { execa } from 'execa';

const process = execa('ffmpeg');
process.catch((err) => {
  console.log('process failed', err);
})
// setTimeout(() => {
process.kill();
// }, 0)
