function threeSum(arr, target) {
// write your code here
	arr.sort((a,b)=>{
	a-b;	
	})
	let closestSum = Infinity;

	for(let i=0; i<arr.length-2;i++){
		let left = i+1;
		let right = arr.length-1;

		while(left<right){
			let sum = arr[i]+arr[left]+arr[right];
			let diff = Math.abs(target- sum);

			if(diff===0){
				return sum;
			}
			if(diff<Math.abs(target-closestSum)){
				closestSum = sum;
			}

			if(sum<target){
				left++;
			}
			else{
				right--;
			}
		}
	}
	return closestSum;
  
}

module.exports = threeSum;