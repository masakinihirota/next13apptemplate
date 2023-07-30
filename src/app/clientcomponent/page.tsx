import MyRpcClientComponent from "@/app/MyRpcClientComponent";

/**
 * ホームページコンポーネント
 * @return {JSX.Element} - ホームページコンポーネントのJSX要素
 */
export default async function Home() {
  return (
    <>
      <MyRpcClientComponent arg={1} />
      <MyRpcClientComponent arg={2} />
      <MyRpcClientComponent arg={3} />
      <MyRpcClientComponent arg={4} />
      <MyRpcClientComponent arg={5} />
    </>
  );
}
