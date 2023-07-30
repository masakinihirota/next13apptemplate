// このコードは、tRPCクライアントを使用して、サーバー側のAPIエンドポイントに対してRPCリクエストを送信し、その結果を表示するクライアントコンポーネントを定義しています。

// 具体的には、trpc.userById.useQuery(1)を使用して、サーバー側のuserByIdメソッドに対してRPCリクエストを送信しています。このメソッドは、引数としてユーザーIDを受け取り、そのユーザーの情報を返すものです。

// useQueryは、React Queryというライブラリを使用して、クライアント側でデータをキャッシュするためのフックです。このフックを使用することで、APIリクエストの結果をキャッシュし、同じAPIリクエストが複数回送信された場合に、サーバーに再度リクエストを送信することなく、キャッシュからデータを取得することができます。

// name.dataは、APIリクエストの結果を表しており、undefinedの場合は「did not work」というテキストを表示します。name.dataが定義されている場合は、Hello, {name.data!.name}, greetings from client component land!というテキストを表示します。

// このコードは、tRPCクライアントを使用して、サーバー側のAPIエンドポイントに対してRPCリクエストを送信し、その結果をクライアント側で表示するための基本的な構造を提供しています。

// クライアントコンポーネント
"use client";
import { JSX } from "react";

import { trpc } from "@/trpc";

// a Client Component that makes an RPC and displays the result
// ja: RPC を実行して結果を表示するクライアントコンポーネント

type MyRpcClientComponentProps = {
  arg: number;
};

// 型を別の場所で設定する
/**
 * RPCリクエストを実行し、結果を表示するクライアントコンポーネント
 * @param {Object} props - コンポーネントのプロパティ
 * @param {number} props.arg - RPCリクエストに使用する引数
 * @return {JSX.Element} - コンポーネントのJSX要素
 */
export default function MyRpcClientComponent(
  props: MyRpcClientComponentProps,
): JSX.Element {
  // ↑型を別の場所で設定する場合 (type を使う)
  // ↓型を直接指定する場合
  // export default function MyRpcClientComponent(props: { arg: number }): JSX.Element {

  // （開始地点）tRPCの開始地点 ここから解析を行う。
  // APIリクエストを行っている場所
  const name = trpc.userById.useQuery(props.arg);

  if (name.data == undefined) {
    console.log("name.data を取得できませんでした。");
    return <p>Now Loading or データが取得できませんでした</p>;
  }
  console.log(`result.data is ${JSON.stringify(name.data)}`);

  return (
    <p>こんにちは、 {name.data!.name}さん。 greetings from client component</p>
  );
}
