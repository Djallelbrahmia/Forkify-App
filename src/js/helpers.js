import { TIME_OUT_SECONDS } from './config';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
export const getJSON = async function (url) {
  try {
    const res = await Promise.race([
      fetch(`${url}`),
      timeout(TIME_OUT_SECONDS),
    ]);
    const data = await res.json();
    return data;
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
  } catch (e) {
    throw e;
  }
};
