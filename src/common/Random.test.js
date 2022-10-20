import Random from "./Random";

test("calling randomNum", () => {
	const randNum = Random.randomNum(5, 10);
	expect(randNum).toBeGreaterThanOrEqual(5);
	expect(randNum).toBeLessThanOrEqual(10);
});

test("calling getRandElement", () => {
	const arr = ["a", "b", "c", "d", "e"];
	const randEle = Random.getRandElement(arr);
	expect(arr).toContain(randEle);
});
