// hooks/useOutsideClick.js
import { useEffect } from "react";

export function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
    //useeffect fica solicitando acrescentar o ref junto com callback, porém,
    //não é necessário, visto que nunca muda, motivo este de desativar o aviso abaixo
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);
}
