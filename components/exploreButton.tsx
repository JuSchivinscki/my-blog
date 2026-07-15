"use client";

import { MoveDown } from "lucide-react";

const ExploreButton = () => {
  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto">
      <a href="#articles">
        Veja mais artigos
        <MoveDown />
      </a>
    </button>
  );
};

export default ExploreButton;
