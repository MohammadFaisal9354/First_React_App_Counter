import PropTypes from 'prop-types'; 
import { useState } from 'react';
export const Comp = ({title,price}) =>
{
    const [data, setData] = useState({
        description:title,
        c:0
    });
    return (<>
    <div>
        
        <h2>{data.description}</h2>
        <h5>{data.c}</h5>
        <button onClick={ ()=>{
            setData((e)=>{
                if(e.c<10){
                    return {...e,c:e.c+1,}
                }
                else{
                    return{...e}
                }
            })
        }}>Add</button>
        <button onClick={ ()=>{
            setData((e)=>{
                if(e.c>0){
                    return {...e,c:e.c-1,}
                }
                else{
                    return{...e}
                }
            })
        }}>Sub</button>
    </div>
    </>)
} 