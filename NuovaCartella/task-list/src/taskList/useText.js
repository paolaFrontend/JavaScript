import { useEffect, useState } from "react";

function useText(props) {
  const [ts, setTs] = useState("");
  const [edit, setEdit] = useState("");

  useEffect(() => {
    setTs("");
    setEdit("");
  }, [props]); //tasks

  return [ts, setTs, edit, setEdit];
}

export default useText;
