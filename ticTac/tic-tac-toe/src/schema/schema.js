import { faComputer } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import "./schema.css"
import {computer,controlloVittoria} from '../singlePlayer/logic';
import FinePartita from '../finePartita/finePartita';

function Schema(props){
    const [giocatore, setGiocatore]=useState("X")
    const [mossa,setMossa]=useState({m1:false, m2:false, m3:false, m4:false, m5:false, m6:false, m7:false, m8:false, m9:false, last: null});
    const [end,setEnd]=useState(false)
    useEffect(()=>{
        if(mossa.last!==null){
            let t=controlloVittoria(mossa)
            console.log("con")
            console.log(t)
            setEnd(t)
            if(t==false && mossa.last!==null) 
                setGiocatore(giocatore=="X"? "O": "X") 
            else
                setGiocatore(t=="pari"? t: giocatore) 
            console.log("mosse")
            console.log(mossa)
        }   
    },[mossa])
    
    useEffect(()=>{
        if(end== false && giocatore!==props.segno && (giocatore=="X" || giocatore=="O"))
            setTimeout(()=>computer(setMossa, mossa, giocatore, setGiocatore), 1000)
    },[giocatore])

  return (
    <div className='quadranti'>
        {end!==false && 
        <FinePartita giocatore={giocatore} end={end}></FinePartita>}
        <div className='row'>
            <span className='q1' onClick={()=>{
                if(mossa.m1==false && giocatore==props.segno && end==false)
                    setMossa({...mossa, m1:giocatore, last: 1})   
                }}>
                <p className={mossa.m1=="X"? 'xSign' : (mossa.m1=="O" && 'oSign')}>{mossa.m1!==false && mossa.m1}</p>
            </span>
            <div className='linea'></div>
            <span className='q2' onClick={()=>{
                if(mossa.m2==false && giocatore==props.segno && end==false)
                    setMossa({...mossa, m2:giocatore, last: 2})
                }}>
                <p className={mossa.m2=="X"? 'xSign' : (mossa.m2=="O" && 'oSign')}>{mossa.m2!==false && mossa.m2}</p>
            </span>
            <div className='linea'></div>
            <span className='q3' onClick={()=>{
                if(mossa.m3==false && giocatore==props.segno && end==false)
                    setMossa({...mossa, m3:giocatore, last: 3})
                    }}>
                <p className={mossa.m3=="X"? 'xSign' : (mossa.m3=="O" && 'oSign')}>{mossa.m3!==false && mossa.m3}</p>
            </span></div>
        <div className='row'><div className='lineaOrizzontale'></div><div className='lineaOrizzontale'></div><div className='lineaOrizzontale'></div></div>
        <div className='row'>
            <span className='q4' onClick={()=>{
                if(mossa.m4==false && giocatore==props.segno && end==false)
                    setMossa({...mossa, m4:giocatore, last: 4})
                    }}>
                <p className={mossa.m4=="X"? 'xSign' : (mossa.m4=="O" && 'oSign')}>{mossa.m4!==false && mossa.m4}</p>
            </span>
            <div className='linea'></div>
            <span className='q5' onClick={()=>{
                if(mossa.m5==false && giocatore==props.segno && end==false)
                    setMossa({...mossa, m5:giocatore, last: 5})
                    }}>
                <p className={mossa.m5=="X"? 'xSign' : (mossa.m5=="O" && 'oSign')}>{mossa.m5!==false && mossa.m5}</p>
            </span>
            <div className='linea'></div>
            <span className='q6' onClick={()=>{
                if(mossa.m6==false && giocatore==props.segno && end==false)
                    setMossa({...mossa, m6:giocatore, last: 6})
                }}>
                <p className={mossa.m6=="X"? 'xSign' : (mossa.m6=="O" && 'oSign')}>{mossa.m6!==false && mossa.m6}</p>
            </span></div>
        <div className='row'><div className='lineaOrizzontale'></div><div className='lineaOrizzontale'></div><div className='lineaOrizzontale'></div></div>
        <div className='row'>
            <span className='q7' onClick={()=>{
                if(mossa.m7==false && giocatore==props.segno && end==false)
                    setMossa({...mossa, m7:giocatore, last: 7})
                }}>
                <p className={mossa.m7=="X"? 'xSign' : (mossa.m7=="O" && 'oSign')}>{mossa.m7!==false && mossa.m7}</p>
            </span>
            <div className='linea'></div>
            <span className='q8' onClick={()=>{
                if(mossa.m8==false && giocatore==props.segno && end==false)
                    setMossa({...mossa, m8:giocatore, last: 8})
                }}>
                <p className={mossa.m8=="X"? 'xSign' : (mossa.m8=="O" && 'oSign')}>{mossa.m8!==false && mossa.m8}</p>
            </span>
            <div className='linea'></div>
            <span className='q9' onClick={()=>{
                if(mossa.m9==false && giocatore==props.segno && end==false)
                    setMossa({...mossa, m9:giocatore, last: 9})
                }}>
                <p className={mossa.m9=="X"? 'xSign' : (mossa.m9=="O" && 'oSign')}>{mossa.m9!==false && mossa.m9}</p>
            </span></div>
    </div>
  )

}

export default Schema