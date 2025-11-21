
import { Button, Input } from '@/components/ui-components/atoms/input';
import { Sub } from '@/components/ui-components/atoms/text';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function Home() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const router = useRouter();

  const login = (e) => {
      e.preventDefault()
        router.push('/dashboard')
    
  }

  
  return (
    <div style={{height:'100vh', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
    <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      
        <div style={{padding: 10}}>
          <Image  src="/fastracker-icon-2.png" height={120} width={120}/>
        </div>
          
          <h1 style={{color: '#38B000', fontSize: 40}}>Manufacturing Dashboard</h1>
          <br/>
      <form style={{display:"flex", justifyContent:"center", flexDirection:"column"}} onSubmit={login}>
            <Input style={{width:"100%"}} placeholder='email address' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input style={{width:"100%"}}  placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
           
            <br/>
            <Button  type="submit">Login</Button>
            <br/>
            <Sub>use anything as username and password</Sub>
        </form>
        
    </div>
    </div>
  )
}
