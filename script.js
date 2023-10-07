  arr.sort((a, b) => a - b);

  // Initialize variables to store the closest sum and its difference from the target.
  let closestSum = Infinity;
  let minDiff = Infinity;

  // Iterate through the array with a fixed first element.
  for (let i = 0; i < arr.length - 2; i++) {
    // Two pointers approach for the remaining elements.
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(sum - target);

      // Check if the current sum is closer to the target.
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      if (sum < target) {
        // Move the left pointer to the right to increase the sum.
        left++;
      } else {
        // Move the right pointer to the left to decrease the sum.
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;