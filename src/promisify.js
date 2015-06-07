function zip(keys, values) {
  return keys.reduce((memo, key, i) =>
    Object.assign(memo, {[key]: values[i]}), {}
  );
}

export default function promisify(fn, keys) {
  return (...args) =>
    new Promise((resolve, reject) =>
      fn(...args, (error, ...values) =>
        error ? reject(error) :
        values.length <= 1 ? resolve(values[0]) :
        keys ? resolve(zip(keys, values)) :
        resolve(values)
      )
    );
}
