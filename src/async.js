import fetch from 'node-fetch';

export const asyncCallback = (output, callback) => setTimeout(() => callback(output), 0.1);

export const asyncPromise = (output) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(output);
    }, 0.1);
  });
};

export const call = method => obj => obj[method]();

export const asyncGet = url => fetch(url).then(call('json'));