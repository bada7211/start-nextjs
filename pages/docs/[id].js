import { useRouter } from "next/router"
import Link from 'next/link';
import Layout from "@/components/layout";
export async function getServerSideProps(context){
    return {
        props:{}
    }
}
// ^^^ 얘를 넣으면 undefined 안뜸
export default function Docs(){
    const route = useRouter();
    console.log("Router", route.query.id);
    // [id] < 이 네이밍 > .id
    if(route.query.id===undefined){
        return <>Loading...</>
    }
    let content = null;
    if(route.query.id == 1){
        content = "Doc1";
    } else if(route.query.id ==2){
        content = "Doc2";
    }
    return <>
    {content}</>
}