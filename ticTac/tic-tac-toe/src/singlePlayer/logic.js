import { faMicrophoneAltSlash, faMicrophoneLinesSlash } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"

function computer(setMossa, mossa, giocatore, setGiocatore){
        let num= betterSolution(mossa, giocatore)

        switch(num){
            case 0: {
                if(mossa.m1==false){ 
                    setMossa({...mossa, m1: giocatore, last: 1})
                    return}
            }
                break;
            case 1: {
                if(mossa.m2==false){ 
                    setMossa({...mossa, m2: giocatore, last: 2})
                    return}
            }
                break;
            case 2: {
                if(mossa.m3==false){ 
                    setMossa({...mossa, m3: giocatore, last: 3 })
                    return 
                }
            }
                    break;
            
            case 3: {
                if(mossa.m4==false){ 
                    setMossa({...mossa, m4: giocatore, last: 4})
                    return}
            }
                break; 
            case 4: {
                if(mossa.m5==false){ 
                    setMossa({...mossa, m5: giocatore, last: 5})  
                    return}
            }
                break;
            case 5: {
                if(mossa.m6==false){ 
                    setMossa({...mossa, m6: giocatore, last: 6}) 
                    return}
            }
                break;
            case 6: {
                if(mossa.m7==false){ 
                    setMossa({...mossa, m7: giocatore, last: 7})
                    return}
            }
                break;
            case 7: {
                if(mossa.m8==false){ 
                    setMossa({...mossa, m8: giocatore, last: 8})
                    return}
            }
                break;
            case 8: {
                if(mossa.m9==false){ 
                    setMossa({...mossa, m9: giocatore, last: 9})
                    return}
            }
                break;
        }
}

function betterSolution(mossa, giocatore){
    let possibleChoose=false
    console.log("possible inizile")
    console.log(possibleChoose)
    if ((mossa.m3==mossa.m2 && mossa.m2!==false) || (mossa.m4==mossa.m7 && mossa.m4!==false) || ( mossa.m9==mossa.m5 && mossa.m5!==false)){
        if(mossa.m1==false){
        if ( (mossa.m3==mossa.m2  && mossa.m2==giocatore) || (mossa.m4==mossa.m7 && mossa.m4==giocatore) || ( mossa.m9==mossa.m5 && mossa.m5==giocatore))//vittoria
            return 0
        else
            possibleChoose=0
        }
    }
    if ((mossa.m1==mossa.m3 && mossa.m1!==false) ||(mossa.m5==mossa.m8 && mossa.m5!==false)){
        if(mossa.m2==false){
        if((mossa.m1==mossa.m3 && mossa.m1== giocatore) ||(mossa.m5==mossa.m8 && mossa.m5==giocatore))
            return 1
        else
            possibleChoose=1
        }
    }
    if ( (mossa.m1==mossa.m2  && mossa.m2!==false) || (mossa.m6==mossa.m9 && mossa.m6!==false) || ( mossa.m7==mossa.m5 && mossa.m5!==false)){
        if(mossa.m3==false){
        if ( (mossa.m1==mossa.m2  && mossa.m2==giocatore) || (mossa.m6==mossa.m9 && mossa.m6==giocatore) || ( mossa.m7==mossa.m5 && mossa.m5==giocatore))//vittoria
            return 2
        else
            possibleChoose=2
        }
    }
    if ((mossa.m1==mossa.m7 && mossa.m1!==false) || (mossa.m5==mossa.m6 && mossa.m5!==false)){
        if(mossa.m4==false){
        if((mossa.m1==mossa.m7 && mossa.m1==giocatore) || (mossa.m5==mossa.m6 && mossa.m5==giocatore))
            return 3
        else
            possibleChoose=3
        }
    }
    if ((mossa.m3==mossa.m7 && mossa.m3!==false) ||( mossa.m4==mossa.m6 && mossa.m4!==false) || (mossa.m2==mossa.m8 && mossa.m2!==false) || (mossa.m9==mossa.m1 && mossa.m9!==false)){
        if(mossa.m5==false){
        if((mossa.m2==mossa.m7 && mossa.m2==giocatore) ||( mossa.m4==mossa.m6 && mossa.m4==giocatore) || (mossa.m2==mossa.m8 && mossa.m2==giocatore) || (mossa.m9==mossa.m1 && mossa.m9==giocatore))
            return 4
        else 
            possibleChoose=4
        }
    }
        
    if ((mossa.m4==mossa.m5 && mossa.m4!==false) || ( mossa.m3==mossa.m9 && mossa.m3!==false)){
        if(mossa.m6==false){
        if((mossa.m4==mossa.m5 && mossa.m4==giocatore) || ( mossa.m3==mossa.m9 && mossa.m3==giocatore))
            return 5
        else
            possibleChoose=5
        }
    }    
    if ((mossa.m3==mossa.m5  && mossa.m5!==false) || (mossa.m4==mossa.m1 && mossa.m41!==false) || ( mossa.m9==mossa.m8 && mossa.m8!==false)){
        if(mossa.m7==false){
        if ( (mossa.m3==mossa.m5  && mossa.m5==giocatore) || (mossa.m4==mossa.m1 && mossa.m4==giocatore) || ( mossa.m9==mossa.m8 && mossa.m8==giocatore))//vittoria
            return 6
        else
            possibleChoose=6
        }
    }
    if ((mossa.m7==mossa.m9 && mossa.m7!==false) || ( mossa.m5==mossa.m2 && mossa.m5!==false)){
        if(mossa.m8==false){
        if((mossa.m7==mossa.m9 && mossa.m7==giocatore) || ( mossa.m5==mossa.m2 && mossa.m5==giocatore))
            return 7
        else
            possibleChoose=7
        }
    } 
    if ((mossa.m3==mossa.m6  && mossa.m3!==false) || (mossa.m8==mossa.m7 && mossa.m7!==false) || ( mossa.m1==mossa.m5 && mossa.m5!==false)){
        if(mossa.m9==false){
        if ( (mossa.m3==mossa.m6  && mossa.m3==giocatore) || (mossa.m8==mossa.m7 && mossa.m7==giocatore) || ( mossa.m1==mossa.m5 && mossa.m5==giocatore))//vittoria
            return 8
        else
            possibleChoose=8
        }
    }

    if(possibleChoose==false)
        possibleChoose=strategy(mossa, giocatore)

    return possibleChoose  
}

function controlloVittoria( mossa){
    if(((mossa.last==1 || mossa.last==2 || mossa.last==3) && mossa.m1==mossa.m2 && mossa.m1==mossa.m3 && mossa.m1!==false) || 
        ((mossa.last==4 || mossa.last==5 || mossa.last==6) && mossa.m4==mossa.m5 && mossa.m4==mossa.m6 && mossa.m4!==false) ||
        ((mossa.last==7 || mossa.last==8 || mossa.last==9) && mossa.m7==mossa.m8 && mossa.m7==mossa.m9 && mossa.m7!==false))
        return "orizzontale"
    if(((mossa.last==1 || mossa.last==4 || mossa.last==7) && mossa.m1==mossa.m4 && mossa.m1==mossa.m7 && mossa.m1!==false) || 
        ((mossa.last==2 || mossa.last==5 || mossa.last==8) && mossa.m2==mossa.m5 && mossa.m2==mossa.m8 && mossa.m2!==false) ||
        ((mossa.last==3 || mossa.last==6 || mossa.last==9) && mossa.m3==mossa.m6 && mossa.m3==mossa.m9 && mossa.m3!==false))
        return "verticale"
    if((mossa.last==1 || mossa.last==5 || mossa.last==9) && mossa.m1==mossa.m5 && mossa.m1==mossa.m9 && mossa.m1!==false)
        return "diagonaleDestra"
    if((mossa.last==3 || mossa.last==5 || mossa.last==7) && mossa.m3==mossa.m5 && mossa.m3==mossa.m7 && mossa.m3!==false)
        return "diagonaleSinistra"
    if(mossa.m1!==false && mossa.m2!==false && mossa.m3!==false && mossa.m4!==false && mossa.m5!==false && mossa.m6!==false && mossa.m7!==false && mossa.m8!==false && mossa.m9!==false)
        return "pari"
    return false
}

function strategy(mossa, giocatore){
    
    switch(mossa.last){
        default: {
            let possibleChoose=[]
            if(mossa.m1==false){ 
                if((mossa.m2==mossa.m4 && mossa.m2==giocatore) || 
                (mossa.m2==mossa.m7 && mossa.m2==giocatore) ||
                (mossa.m4==mossa.m3 && mossa.m3==giocatore) ||
                (mossa.m2==mossa.m9 && mossa.m2==giocatore) ||
                (mossa.m4==mossa.m9 && mossa.m4==giocatore))
                    return 0
                else
                    possibleChoose.push(0)
            }
            if(mossa.m2==false){
                if((mossa.m1==mossa.m8 && mossa.m1==giocatore) || 
                (mossa.m3==mossa.m8 && mossa.m3==giocatore) )
                    return 1
                else
                    possibleChoose.push(1)
            }
            if(mossa.m3==false){ 
                if((mossa.m2==mossa.m7 && mossa.m2==giocatore) ||
                (mossa.m2==mossa.m9 && mossa.m2==giocatore) ||
                (mossa.m6==mossa.m1 && mossa.m1==giocatore) ||
                (mossa.m2==mossa.m6 && mossa.m2==giocatore)||
                (mossa.m6==mossa.m7 && mossa.m6==giocatore))
                    return 2
                else
                    possibleChoose.push(2)
            }
            if(mossa.m4==false){
                if((mossa.m1==mossa.m6 && mossa.m1==giocatore) || 
                (mossa.m7==mossa.m6 && mossa.m6==giocatore) )
                    return 3
                else
                    possibleChoose.push(3)
            }
            if(mossa.m5==false){
                if((mossa.m1==mossa.m8 && mossa.m8==giocatore) ||
                (mossa.m3==mossa.m8 && mossa.m8==giocatore) ||
                (mossa.m4==mossa.m8 && mossa.m8==giocatore) ||
                (mossa.m6==mossa.m8 && mossa.m8==giocatore) ||
                (mossa.m3==mossa.m4 && mossa.m4==giocatore) ||
                (mossa.m9==mossa.m4 && mossa.m4==giocatore) ||
                (mossa.m2==mossa.m4 && mossa.m4==giocatore) ||
                (mossa.m8==mossa.m4 && mossa.m4==giocatore) ||
                (mossa.m7==mossa.m2 && mossa.m2==giocatore) ||
                (mossa.m9==mossa.m2 && mossa.m2==giocatore) ||
                (mossa.m4==mossa.m2 && mossa.m2==giocatore) ||
                (mossa.m6==mossa.m2 && mossa.m2==giocatore) ||
                (mossa.m1==mossa.m6 && mossa.m1==giocatore) ||
                (mossa.m7==mossa.m6 && mossa.m1==giocatore) ||
                (mossa.m2==mossa.m6 && mossa.m1==giocatore) ||
                (mossa.m8==mossa.m6 && mossa.m1==giocatore))
                    return 4
                else
                    possibleChoose.push(4)
            }
            if(mossa.m6==false){
                if((mossa.m4==mossa.m3 && mossa.m4==giocatore) || 
                (mossa.m4==mossa.m9 && mossa.m9==giocatore) )
                    return 5
                else
                    possibleChoose.push(5)

            }
            if(mossa.m7==false){
                if((mossa.m3==mossa.m8 && mossa.m3==giocatore) ||
                (mossa.m1==mossa.m8 && mossa.m1==giocatore) ||
                (mossa.m4==mossa.m9 && mossa.m4==giocatore) ||
                (mossa.m4==mossa.m8 && mossa.m4==giocatore) ||
                (mossa.m3==mossa.m4 && mossa.m3==giocatore))
                    return 6
                else
                    possibleChoose.push(6)
            }
            if(mossa.m8==false){
                if((mossa.m2==mossa.m9 && mossa.m2==giocatore) || 
                (mossa.m7==mossa.m2 && mossa.m2==giocatore) )
                    return 7
                else
                    possibleChoose.push(7)
            }
            if(mossa.m9==false){
                if((mossa.m8==mossa.m1 && mossa.m1==giocatore) ||
                (mossa.m7==mossa.m6 && mossa.m6==giocatore) ||
                (mossa.m8==mossa.m3 && mossa.m3==giocatore) ||
                (mossa.m8==mossa.m6 && mossa.m6==giocatore) ||
                (mossa.m6==mossa.m1 && mossa.m1==giocatore))
                    return 8
                else
                    possibleChoose.push(8)
            }
            if(possibleChoose.length!==0){
                if(possibleChoose.length==1)
                    return possibleChoose[0]
                let x=Math.floor(Math.random()*possibleChoose.length)
                return possibleChoose[x]
            }
        }
    }

    return false
}

export {computer, controlloVittoria};