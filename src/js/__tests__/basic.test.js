import orderByProps from "../basic";

const character = {
  name: "swordsman",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

describe("orderByProps", () => {
  test("name, level", () => {
    const result = orderByProps(character, ["name", "level"]);
    const expected = [
      { key: "name", value: "swordsman" },
      { key: "level", value: 2 },
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 },
    ];
    expect(result).toEqual(expected);
  });
  test("name, defence, level", () => {
    const result = orderByProps(character, ["name", "defence", "level"]);
    const expected = [
      { key: "name", value: "swordsman" },
      { key: "defence", value: 40 },
      { key: "level", value: 2 },
      { key: "attack", value: 80 },
      { key: "health", value: 10 },
    ];
    expect(result).toEqual(expected);
  });
  test("name, armor, level", () => {
    const result = orderByProps(character, ["name", "armor", "level"]);
    const expected = [
      { key: "name", value: "swordsman" },
      { key: "level", value: 2 },
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 },
    ];
    // expect(result).toBe(`No armor`);
    expect(result).toEqual(expected);
  });
});
