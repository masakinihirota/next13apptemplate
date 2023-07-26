"use client";

// import文の順番も自動整形されます。
import { type NextPage } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Home: NextPage = () => {
  return (
    <main>
      <h1 className="p-4 pt-2">VNS.BLUE</h1>
      Next.js app router 開発用テンプレート (Storybook Supabase shadcn/ui)
      <br />
      {/* ↓この行を消すとimport文が自動削除されます */}
      <Link href="/">Home</Link>
      <div>
        <Button>shadcn/ui の Button</Button>
      </div>
    </main>
  );
};

export default Home;
