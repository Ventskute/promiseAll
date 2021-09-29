Promise.allSettled = (promises) => {
  console.log("All settled work");
  return Promise.all(
    promises.map((promise) =>
      promise
        .then((val) => ({ status: "fulfilled", value: val }))
        .catch((err) => ({ status: "rejected", reason: err }))
    )
  );
};

Promise.allSettled([
  Promise.resolve(1),
  new Promise((res, rej) => setTimeout(() => rej(2), 3000)),
  Promise.resolve(3),
]).then((arr) => console.log(arr));
