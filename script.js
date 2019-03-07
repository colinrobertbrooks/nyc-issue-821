// unit
export const foo = val => val;

// integration
const bar = val => val;
export const baz = val => bar(val);

// none
export const buzz = () => "bzzz";
