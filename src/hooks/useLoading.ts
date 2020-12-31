import { useGlobalContext } from '../context';

export function useLoading() {
  const { isLoading, setIsLoading } = useGlobalContext();

  const loading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return { isLoading, loading };
}
