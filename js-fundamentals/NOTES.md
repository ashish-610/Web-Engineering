# Part C: Task Queue Order

## Predicted vs actual order

| Step | Predicted | Actual |
|---|---|---|
| `push(task1)` | Task 1 is queued first | Task 1 is queued first |
| `push(task2)` | Task 2 is queued second | Task 2 is queued second |
| `push(task3)` | Task 3 is queued third | Task 3 is queued third |
| `runAll()` | Tasks execute in insertion order | Tasks execute in insertion order |
| Completion | Task 1 finishes before Task 2 starts | Task 1 finishes before Task 2 starts |

`runAll()` uses `await` inside a `for...of` loop, so its tasks are sequential rather than concurrent. The results array preserves insertion order, and the queue is cleared after every task completes.
