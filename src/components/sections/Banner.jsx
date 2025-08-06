import React from "react";
import Logo from "../Logo";

export default function Banner() {
  return (
    <div className="flex flex-row-reverse lg:flex-row gap-5 justify-between">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ipsa delectus. Optio cumque, quas, omnis laboriosam iusto tempora fugiat, rem excepturi odio unde amet cupiditate et tenetur dolorum magni reiciendis.
      </div>
      <div>
        <Logo></Logo>
      </div>
    </div>
  );
}
