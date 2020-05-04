import orderByProps from "./basic";

console.log("worked");

const character = {
  name: "swordsman",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

console.log(orderByProps(character, ["name", "armor", "level"]));
