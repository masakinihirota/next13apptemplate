// import文の順番も自動整形されます。
import { type NextPage } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Home: NextPage = () => {
  return (
    <main>
      {/* TailwindCSSのプロパティ値も自動整列されます。 */}
      <h1 className="p-4 pt-2 text-red-300">VNS.BLUE</h1>
      <div className="text-green-400">
        Next.js app router 開発用テンプレート (Storybook Supabase shadcn/ui)
      </div>
      <br />
      {/* ↓この行を消すとimport文が自動削除されます。 */}
      <Link href="/">Home</Link>
      <div>
        <Button>shadcn/ui の Button</Button>
      </div>
      <br />
      <Link href="./ModeTogglePage">ModeTogglePage</Link>
    </main>
  );
};

export default Home;
