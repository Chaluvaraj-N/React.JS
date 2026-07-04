import React, { useEffect, useRef, useState } from "react";

// React.memo prevents re-rendering when props haven't changed.
// If Parent passes a new function reference each render,
// Child will re-render unnecessarily.

const Child = React.memo(function Child({ onAction }) {
  const [clicks, setClicks] = useState(0);
  const renderCount = useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    // Log to help you see when Child re-renders.
    // (You can remove this later.)
    console.log(`Child render #${renderCount.current}`);
  });

  const handleClick = () => {
    setClicks((c) => c + 1);
    onAction();
  };

  return (
    <div style={{ marginTop: 16, padding: 12, border: "1px solid #eee", borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>Child (React.memo)</h3>
      <p style={{ margin: "8px 0" }}>
        <b>Child local clicks:</b> {clicks}
      </p>

      <button onClick={handleClick}>Click Child button (calls Parent handler)</button>

      <p style={{ margin: "10px 0 0", color: "#666" }}>
        Open console to see re-renders. With useCallback, Child should not re-render
        when only Parent count changes (unless handler deps change).
      </p>
    </div>
  );
});

export default Child;

