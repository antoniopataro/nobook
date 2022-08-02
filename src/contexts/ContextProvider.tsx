import NotebooksProvider from "./NotebooksProvider";

interface ContextProviderProps {
  children: React.ReactNode;
}

function ContextProvider({ children }: ContextProviderProps) {
  return <NotebooksProvider>{children}</NotebooksProvider>;
}

export default ContextProvider;
