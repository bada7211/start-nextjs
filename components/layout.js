import Link from "next/link";
export default function Layout(props){
    console.log(props);
    return <>
    <h1><Link href="/">Counter</Link></h1>
    <ul>
      <li><Link href="/about">about</Link></li>
      <li><Link href="/docs/1">doc1</Link></li>
      <li><Link href="/docs/2">doc2</Link></li>
    </ul>
    {props.children}
    </>
}