function zip(keys, values) {
  return keys.reduce((memo, key, index) =>
    Object.assign(memo, {[key]: values[index]}), {}
  );
}

export default function promisify(fn, keys) {
  return (...args) =>
    new Promise((resolve, reject) =>
      fn(...args, (error, ...values) => {
        if (error) {
          if (keys) {
            Object.assign(error, zip(keys, values));
          }
          reject(error);
        } else if (values.length <= 1) {
          resolve(values[0]);
        } else if (keys) {
          resolve(zip(keys, values));
        } else {
          resolve(values);
        }
      })
    );
}
