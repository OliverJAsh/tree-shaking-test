export const unused = 1;

export const identity = x => x;

const myFunction = I => {
  const r = {};
  if (typeof I.map === "function") {
    r.map = () => {};
  }
  return r;
};

const result = /*#__PURE__*/ myFunction({});
const map = result.map;
