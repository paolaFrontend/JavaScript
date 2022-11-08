import { useEffect, useState } from "react";

function useChange(props) {
  const [changeAct, setChangeAct] = useState({ f: false, id: null });
  const [changeDes, setChangeDes] = useState({ f: false, id: null });
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    setChangeAct({ f: false, id: null });
    setChangeDes({ f: false, id: null });
  }, [props]); //tasks

  useEffect(()=>{
    empty==false && setChangeAct({ f: false, id: null });
    empty==false && setChangeDes({ f: false, id: null });
  },[empty]);

  return [changeAct, setChangeAct, changeDes, setChangeDes, empty, setEmpty];
}

export default useChange;
