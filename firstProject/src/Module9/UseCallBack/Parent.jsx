import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

// Example to demonstrate useCallback:
// - Parent creates a handler function that is passed to Child.
// - When the parent re-renders (count changes), useCallback keeps the handler
//   reference stable so React.memo(Child) can skip re-rendering.

export default function Parent() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  // Expensive-ish derived value just to show re-renders.
  const doubled = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 200000; i++) {
      sum += i % 3;
    }
    return count * 2 + sum * 0; // keep deterministic; computation is just illustrative
  }, [count]);

  // ✅ useCallback: stable function reference unless dependencies change.
  const handleChildAction = useCallback(() => {
    // This uses 'multiplier' so we must include it in the dependency array.
    setCount((prev) => prev + multiplier);
  }, [multiplier]);

  return (
    <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 8, maxWidth: 520 }}>
      <h2 style={{ marginTop: 0 }}>Module 9 - useCallback (Parent)</h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
        <button onClick={() => setCount((c) => c + 1)}>Parent +1</button>
        <button onClick={() => setMultiplier((m) => (m === 2 ? 3 : 2))}>Toggle multiplier</button>
      </div>

      <p style={{ margin: "8px 0" }}>
        <b>count:</b> {count}
      </p>
      <p style={{ margin: "8px 0" }}>
        <b>multiplier:</b> {multiplier}
      </p>
      <p style={{ margin: "8px 0", color: "#555" }}>
        (Re-renders happen on state changes. Child should avoid re-render when useCallback is used.)
      </p>
      <p style={{ margin: "8px 0", color: "#777" }}>
        doubled(calc): {doubled}
      </p>

      <Child onAction={handleChildAction} />
    </div>
  );
}

