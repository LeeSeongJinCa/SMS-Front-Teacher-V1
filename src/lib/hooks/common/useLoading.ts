import useBool from "./useBoolean";

const useLoading = () => {
  const [loading, startLoading, endLoading] = useBool();

  return [loading, startLoading, endLoading] as const;
};

export default useLoading;
