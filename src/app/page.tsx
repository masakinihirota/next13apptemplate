import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <h1 className="p-4 pt-2">VNS.BLUE</h1>
      Next.js app router 開発用テンプレート (Storybook Supabase shadcn/ui)
      <br />
      {/* ↓この行を消したり復元したりするとimport文が自動削除、自動挿入されるのが確認できます。 */}
      <Link href="/">Home</Link>
    </main>
  );
};

export default Home;
