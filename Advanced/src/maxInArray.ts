const maxInArray = (arr: number[]): number => {
	const maxi = arr.reduce((acc, curr) => {
		acc =  curr > acc ? curr: acc;
		return acc;
	}, 0);

	return maxi;
}

const numArray: number[] = [3, 6, 1, 9, 7, 0, 5];
console.log(numArray);

const ans = maxInArray(numArray);
console.log(`Maximum value in this Array: ${ans}`);
