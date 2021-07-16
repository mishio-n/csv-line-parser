import { asyncReader } from "..";

const StarterPokemonColumn = {
  fire: 0,
  water: 1,
  grass: 2,
};

describe("test for async-reader", () => {
  const reader = asyncReader("./test/test.csv", StarterPokemonColumn);

  test("get header", async () => {
    const header = (await reader.next()).value;
    expect(header).toStrictEqual({
      fire: "fire",
      water: "water",
      grass: "grass",
    });
  });

  test("get no evolved", async () => {
    const noEvolved = (await reader.next()).value;
    expect(noEvolved).toStrictEqual({
      fire: "Charmander",
      water: "Squirtle",
      grass: "Bulbasaur",
    });
  });

  test("get one evolved", async () => {
    const oneEvolved = (await reader.next()).value;
    expect(oneEvolved).toStrictEqual({
      fire: "Charmeleon",
      water: "Wartortle",
      grass: "Ivysaur",
    });
  });

  test("get final evolved", async () => {
    const finalEvolved = (await reader.next()).value;
    expect(finalEvolved).toStrictEqual({
      fire: "Chalizard",
      water: "Blastoise",
      grass: "Venusaur",
    });
  });
});
