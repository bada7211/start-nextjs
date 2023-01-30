import Link from 'next/link';
import Layout from "@/components/layout";
import {useState, useEffect} from 'react'
export async function getServerSideProps(context) {
  console.log('getServerSideProps');
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'api/count');
  const result = await resp.json();
  return {
    props: {value:result.value},
  }
}
function Counter({value, onChangeValue}) {
  const [step, setStep] = useState(1);
  
  return (
    <> 
      <input type="number" value={step} onChange={(evt)=>{
        setStep(Number(evt.target.value));
        }}></input>
      <input type="button" value="+" onClick={()=>{
      onChangeValue(value+step);
    }}></input></>
  )
}

export default function Home(props) {
  console.log("homeProps", props);
  const [count, setCount] = useState(props.value);
  return (
    <>
    {count}
      <Counter value={count} onChangeValue={(newValue)=>{
      const options = {
          method :'PATCH',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({value:newValue})
      }
      fetch(process.env.NEXT_PUBLIC_API_URL+'/api/count', options)
      .then(response=>response.json())
      .then(result=>setCount(result.value));
      }}></Counter>
    </>
  )
}
