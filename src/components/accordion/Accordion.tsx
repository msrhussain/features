import { useState } from "react";
import { useFetchAccordionData } from "../../hooks";
import AccordionShimmer from "../../shimmers/AccordionShimmer";
import { accordionURL } from "../../utils";
import AccordionItem from "./AccordionItem";

import "../../styles/_accordion.scss";

const selectedSet: Set<number> = new Set();

const Accordion = () => {
  const [singleSelection, setSingleSelection] = useState<null | number>(null);
  const [multiSelection, setMultiSelection] =
    useState<Set<number>>(selectedSet);
  const [isMultiSelection, setIsMultiSelection] = useState<boolean>(false);

  const { payload, isLoading, error } = useFetchAccordionData(
    `${accordionURL}/comments`
  );

  const accordionData = (payload as AccordionDataState[])?.slice(0, 10);

  const handleMultiSelection = (currentId: number) => {
    setMultiSelection((prevMultiSelection) => {
      const selectedSet = new Set(prevMultiSelection);
      if (selectedSet.has(currentId)) selectedSet.delete(currentId);
      else selectedSet.add(currentId);
      return selectedSet;
    });
  };
  const handleSingleSelection = (currentId: number) => {
    setSingleSelection(singleSelection === currentId ? null : currentId);
  };

  const handleSelection = (id: number) =>
    isMultiSelection ? handleMultiSelection(id) : handleSingleSelection(id);

  const enableSelection = () => {
    setIsMultiSelection(!isMultiSelection);
    setMultiSelection(selectedSet);
    setSingleSelection(null);
  };

  // Render component
  if (isLoading) return <AccordionShimmer />;
  if (error) return <h3>Error : {error}</h3>;

  return (
    <div className="accordion">
      <button className="accordion_btn" onClick={enableSelection}>
        <span>{isMultiSelection ? " SingleSelection" : " MultiSelection"}</span>
      </button>
      {accordionData?.map((data) => (
        <AccordionItem
          key={data.id}
          {...data}
          handleSelection={handleSelection}
          isSelect={
            isMultiSelection
              ? multiSelection.has(data.id)
              : singleSelection === data.id
          }
        />
      ))}
    </div>
  );
};

export default Accordion;
