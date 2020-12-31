import { useGlobalContext } from '../context';

export function useToast() {
  const { isToast, setToast } = useGlobalContext();

  const toast = (msg: string) => {
    setToast({ status: true, msg: msg });
    setTimeout(() => setToast({ status: false, msg: '' }), 1000);
  };

  return { isToast, toast };
}
