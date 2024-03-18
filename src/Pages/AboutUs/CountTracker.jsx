import React, { useEffect, useState } from "react";

const CountTracker = ({ initialValue, targetValue, isLast }) => {
  const [count, setCount] = useState(initialValue);
  const step = Math.ceil(targetValue /100);

  useEffect(() => {
    const countUp = () => {
      if (count < targetValue) {
        setCount((prevCount) => Math.min(prevCount + step, targetValue));
      }
    };

    const animationId = requestAnimationFrame(countUp);

    return () => cancelAnimationFrame(animationId);
  }, [count, targetValue, step]);

  const formattedCount =
    isLast && count >= 10000 ? `${Math.floor(count / 1000)}+` : count >= 10000 ? `${Math.floor(count / 1000)}k+` : count;

  return <h1 className="medicine-about-us-count-heading">{formattedCount}</h1>;
};

export default CountTracker;
