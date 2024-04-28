"use client";

export default function Hello() {
  const onClick = () => console.log("hello, there!!");

  return <h1 onClick={onClick}>Hello, there</h1>;
}
