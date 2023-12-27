type name = {
  say: () => void;
};

type pass = {
  sayPass: () => void;
};

//Intersection Types

type newUser = name & pass;

let init: newUser = {
  say: () => {},
  sayPass: () => {},
};
