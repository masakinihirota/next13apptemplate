// このコードは、TRPCサーバーのAPIハンドラーを定義しています。

// TRPCサーバーは、RPC（Remote Procedure Call）を実現するためのライブラリで、クライアントとサーバー間でのデータのやり取りを簡単にすることができます。

// このコードでは、fetchRequestHandler関数を使って、TRPCサーバーのAPIハンドラーを定義しています。fetchRequestHandler関数は、Fetch APIを使ってクライアントからのリクエストを受け取り、TRPCサーバーのルーターにリクエストを渡して、適切なレスポンスを返します。

// handler関数は、fetchRequestHandler関数をラップして、Incoming Requestのログを出力するだけのシンプルな関数です。そして、GETとPOSTという名前の定数に、handler関数を割り当てています。これにより、クライアントからのGETリクエストとPOSTリクエストに対して、同じAPIハンドラーが使用されるようになります。

// このコードは、TRPCサーバーのAPIハンドラーを定義するための基本的な構造を提供しています。

import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch";

import { appRouter } from "@/trpc-server";

// this is the server RPC API handler

// handler はAPIハンドラーを指しています。
// このハンドラーは、HTTPリクエストを受け取り、適切なレスポンスを返すために使用されます。このハンドラーは、APIのエンドポイントに関連付けられています。
const handler = (request: Request) => {
  console.log(`incoming request ${request.url}`);
  // TRPCサーバーのAPIハンドラーを定義
  // このコードは、fetchRequestHandler関数を呼び出しています。
  // fetchRequestHandler関数は、指定されたエンドポイントに対してHTTPリクエストを送信し、レスポンスを返すためのハンドラーです。

  // この関数には、4つの引数が渡されています。

  // 最初の引数はエンドポイントのURLで、
  // 2番目の引数はリクエストオブジェクトです。
  // 3番目の引数は、trpcのルーターで、
  // 4番目の引数は、FetchCreateContextFnOptions型のオブジェクトを引数に取るcreateContext関数です。

  // createContext関数は、コンテキストオブジェクトを作成するために使用されます。この関数は、FetchCreateContextFnOptions型のオブジェクトを引数に取り、コンテキストオブジェクトを返します。この例では、空のオブジェクトが返されます。

  // 最後に、fetchRequestHandler関数は、HTTPリクエストを処理して、レスポンスを返します。このレスポンスは、この関数の戻り値として返されます。
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: function (
      opts: FetchCreateContextFnOptions,
    ): object | Promise<object> {
      // empty context
      return {};
    },
  });
};

export const GET = handler;
export const POST = handler;
