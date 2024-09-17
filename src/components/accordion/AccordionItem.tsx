const AccordionItem = ({
  id,
  name,
  body,
  handleSelection,
  isSelect,
}: AccordionDataProps) => {
  return (
    <div
      onClick={() => handleSelection(id)}
      className="accordion_content"
      key={id}
    >
      <div className="accordion_content_header">
        <h3 className="accordion_content_title">{name}</h3>
        <span className={`accordion_content_icon ${isSelect ? "rotate" : ""}`}>
          +
        </span>
      </div>
      {isSelect && <p className="accordion_content_text">{body}</p>}
    </div>
  );
};

export default AccordionItem;
