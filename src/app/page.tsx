import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <main>
      <h1>VNS.BLUE</h1>
      Next.js app router 開発用テンプレート (Storybook Supabase shadcn/ui)
      <br />
      {/* ↓この行を消したり復元するとimport文が自動削除、自動挿入サれるのが確認できます。 */}
      <Link href="/">Home</Link>
    </main>
  );
};

export default Home;
