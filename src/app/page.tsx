// import文の順番も自動整形されます。
import { type NextPage } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

/**
 * ホームページのコンポーネント。
 * @module Home
 * @return {JSX.Element} ホームページを含む React 要素。
 * @example
 */
const Home: NextPage = () => {
  return (
    <main>
      {/* TailwindCSSのプロパティ値も自動整列されます。 */}
      <h1 className="p-4 pt-2 text-blue-300">VNS.BLUE</h1>
      <div className="text-green-400">
        Next.js app router 開発用テンプレート (Storybook Supabase shadcn/ui)
      </div>
      <br />
      {/* ↓<Button>タグを消すと<Button>のimport文が自動削除されます。 */}
      <div>
        <Button>shadcn/ui の Button</Button>
      </div>
      <br />
      <Link href="./ModeTogglePage">ModeTogglePage</Link>
      <br />
      <Link href="/servercomponent">リンクボタン:サーバーコンポーネント</Link>
      <br />
      <Link href="/clientcomponent">
        リンクボタン:クライアントコンポーネント
      </Link>
    </main>
  );
};

export default Home;
