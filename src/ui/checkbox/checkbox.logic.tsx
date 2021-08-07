interface UseCheckboxLogicReturn {
  onCheckClass: (checked: boolean) => string;
}

const useCheckboxLogic = (): UseCheckboxLogicReturn => {
  const checkClass = (checked: boolean): string => {
    return checked ? 'is-checked' : 'not-checked';
  };

  return {
    onCheckClass: checkClass,
  };
};

export default useCheckboxLogic;
