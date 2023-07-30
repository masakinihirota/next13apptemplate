// 解説
// このファイルは、クライアント側でtrpcを使うためのファイルです。
// このファイルは、サーバー側のtrpc-server.tsとは別物です。
// このファイルは、サーバー側のtrpc-server.tsの型を使って、クライアント側でtrpcを使うためのファイルです。

import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "./trpc-server";
export const trpc = createTRPCReact<AppRouter>();
