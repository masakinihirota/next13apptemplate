// このコードは、ReactアプリケーションでTRPCクライアントを使用するためのプロバイダーコンポーネントを定義しています。

// `TrpcProvider`コンポーネントは、`@tanstack/react-query`と`@trpc/client`を使用して、TRPCクライアントを初期化しています。`QueryClient`は、Reactアプリケーションでデータをキャッシュするためのクライアントであり、`httpBatchLink`は、TRPCサーバーと通信するためのリンクです。

// `trpc.createClient`関数を使用して、TRPCクライアントを初期化し、`httpBatchLink`をリンクとして渡します。`httpBatchLink`は、TRPCサーバーのエンドポイントを指定して、クライアントとサーバー間でのデータのやり取りを簡単にすることができます。

// `TrpcProvider`コンポーネントは、`trpc.Provider`と`QueryClientProvider`をラップしています。`trpc.Provider`は、TRPCクライアントをReactコンポーネントツリーに注入するためのコンポーネントであり、`QueryClientProvider`は、`QueryClient`をReactコンポーネントツリーに注入するためのコンポーネントです。

// このコードは、ReactアプリケーションでTRPCクライアントを使用するための基本的な構造を提供しています。

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React from "react";
import { useState } from "react";

import { trpc } from "@/trpc";

export const TrpcProvider: React.FC<{ children: React.ReactNode }> = (p) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {p.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};
