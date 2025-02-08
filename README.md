# React State Update Bug: Unexpected Value with Post-Increment

This repository demonstrates a common bug in React applications involving incorrect state updates. The issue arises from using the post-increment operator (`count++`) within a `setCount` call inside a `useEffect` hook. This leads to the state value not updating as expected.

## Problem

The original code uses `setCount(count++)`.  The post-increment operator first returns the current value of `count` and then increments it.  Therefore, `setCount` is called with the *old* value of `count`, resulting in a seemingly incorrect update.

## Solution

The correct way to increment the state is to use `setCount(prevCount => prevCount + 1)`.  This leverages the functional update form of `useState`, ensuring the state is updated with the correct value based on its previous state.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the incorrect count behavior.
5. Refer to `bugSolution.js` for the corrected code.