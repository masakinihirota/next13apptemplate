import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
/**
 * @typedef {Object} ButtonProps
 * @property {boolean} [primary=false] - ページ上の主要なアクションかどうか
 * @property {string} [backgroundColor] - 使用する背景色
 * @property {"small" | "medium" | "large"} [size="medium"] - ボタンのサイズ
 * @property {string} label - ボタンのラベル
 * @property {function} [onClick] - クリックハンドラー
 */

/**
 * ユーザーとのインタラクションのためのプライマリ UI コンポーネント
 * @param {ButtonProps} props - ボタンのプロパティ
 * @return {JSX.Element} - ボタンのJSX要素
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " ",
      )}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
