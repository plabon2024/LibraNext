"use client";

import { useSession } from "next-auth/react";

export default function UserInfo() {
  const session = useSession();
  console.log(session)
  return (
    <div>
      {/* <p>{JSON.stringify(session)}</p> */}
    </div>
  );
}