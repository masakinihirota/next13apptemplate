// これはサーバーコンポーネントだが、まだ使用しないほうがいいかも知れない。Next.js 13 App Routerの対応に不安があるため。

import { appRouter } from "@/trpc-server";

/**
 * RSCページのサーバーコンポーネント
 * @return {Promise<JSX.Element>} - コンポーネントのJSX要素を含むPromise
 */
export default async function rscPage() {
  const caller = appRouter.createCaller({});
  // tRPCエンドポイントを呼び出す
  const result = await caller.userById(1);
  if (!result) {
    return <p>Not found</p>;
  }

  // サーバー側でこの出力をレンダリングします
  return (
    <p>Hi, {result.name}, greetings from RSC (React Server Components) </p>
  );
}
