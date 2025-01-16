import { useEffect, useState } from 'react';

export function useAnimation(condition: boolean) {
  const [shouldRender, setShouldRender] = useState(condition);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (condition) setIsComplete(true);
  }, [condition]);

  const onTransitionEnd = () => {
    if (!condition) setIsComplete(false);
  };

  useEffect(() => {
    setShouldRender(condition || isComplete);
  }, [condition, isComplete]);

  return {
    shouldRender,
    onTransitionEnd,
    animationTrigger: condition,
  };
}
