import useBool from "./useBoolean";

export type ApplyModalState = ReturnType<typeof useModal>;

const useModal = () => {
  const [modal, openModal, closeModal] = useBool();

  return [modal, openModal, closeModal] as const;
};

export default useModal;
