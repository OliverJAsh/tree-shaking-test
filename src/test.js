export const identity = x => x;

const pipeable = I => {
  const r = {};
  if (typeof I.map === "function") {
    r.map = () => {};
  }
  return r;
};

const ord = {};
export const contramap = pipeable(ord).contramap;
