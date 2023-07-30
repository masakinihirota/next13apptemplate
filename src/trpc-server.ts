// このコードは、TypeScriptで書かれたTRPCサーバーのエントリーポイントです。TRPCは、RPC（Remote Procedure Call）を実現するためのライブラリで、クライアントとサーバー間でのデータのやり取りを簡単にすることができます。

// このコードでは、TRPCのinitTRPC関数を使って、TRPCサーバーを初期化しています。そして、Userというインターフェースを定義し、userListという配列にユーザー情報を格納しています。appRouterというRPC APIを定義し、userByIdというメソッドをエクスポートしています。userByIdメソッドは、数値を受け取り、userListから該当するユーザーを探して返します。

// このコードは、TRPCサーバーのエントリーポイントとして、クライアントとのやり取りを簡単にするための基本的な構造を提供しています。

import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

// これは、クライアントからの受信RPCに応答するために使用されるデータストアです。

// 型
// 実際はSupabaseの型取得機能を利用する予定
interface User {
  id: string;
  name: string;
}

// DBからfetchした後のデータの形になる予定
// DBから返ってくる形式はオブジェクト配列です。
// そもそも、ここではDBから返ってくる形を意識してダミーデータを設定しています。
// データ形式がオブジェクトなので
// Reactコンポーネントの受け渡しはオブジェクトで行うのが自然です。
const userList: User[] = [
  {
    id: "1",
    name: "VNS.BLUE:1",
  },
  {
    id: "2",
    name: "Masakinihirota:2",
  },
  {
    id: "3",
    name: "シュレディンガーの猫主義:3",
  },
  {
    id: "4",
    name: "アナザーディメンション:4",
  },
  {
    id: "5",
    name: "狂乱索餌:5",
  },
];

// これは、RPC APIを定義しています。
// ルーター設定をおこなう
export const appRouter = t.router({
  // userByIdというプロシージャーを定義しています。
  // プロシージャは、APIのエンドポイントに対応する関数のようなもので、クライアントからのリクエストを処理するために使用されます。

  // このコードは、trpcのルーターを使用して、`userById`という名前のプロシージャを定義しています。このプロシージャは、クライアントからのリクエストに応じて、`userList`配列から該当するユーザーを検索して返します。

  // 具体的には、以下のように解説できます。

  // t.procedure.input(z.number())：t.procedure関数を使用して、プロシージャを定義します。input()メソッドを使用して、プロシージャの引数の型を定義します。この例では、引数が数値であることを示すz.number()スキーマを使用しています。

  // .query((req) => { ... })：query()メソッドを使用して、プロシージャの実装を定義します。
  // この例では、クエリパラメータを処理するために使用されます。reqオブジェクトからinputプロパティを取得し、userList配列から該当するユーザーを検索しています。

  // const { input } = req：reqオブジェクトからinputプロパティを取得し、inputという名前の変数に代入します。inputは、クライアントからのリクエストの引数の値を表します。

  // return userList.find((u) => parseInt(u.id) === input)：userList配列から、idプロパティがinputと一致するユーザーを検索して返します。parseInt()関数を使用して、u.idを数値に変換しています。

  // したがって、このコードは、trpcのルーターを使用して、`userById`という名前のプロシージャを定義し、クライアントからのリクエストに応じて、`userList`配列から該当するユーザーを検索して返すように実装しています。

  userById: t.procedure.input(z.number()).query((req) => {
    const { input } = req;
    return userList.find((u) => parseInt(u.id) === input);
  }),
});

export type AppRouter = typeof appRouter;
