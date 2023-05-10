import React, { useEffect, useRef } from "react";
import TypedLibrary from "typed.js";

interface Props {
  sentences: string[];
  typeSpeed: number;
  backSpeed: number;
}

export default function Typed({ sentences, typeSpeed, backSpeed }: Props) {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef<TypedLibrary>();

  useEffect(() => {
    const options = {
      strings: sentences,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
    };

    // elRef refers to the <span> rendered below
    if (typed) typed.current = new TypedLibrary(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      if (typed.current) typed.current.destroy();
    };
  }, [backSpeed, typeSpeed, sentences]);

  return (
    <div className="wrap">
      <div className="type-wrap">
        <span ref={el} />
      </div>
    </div>
  );
}
