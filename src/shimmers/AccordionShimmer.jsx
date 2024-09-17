import "../styles/_accordionShimmer.scss"
const AccordionShimmer = () => {
  return (
      <div className="accordion">
          <button className="accordion_btn shimmer_btn"></button>
          {Array.from({ length: 10 }, (_,index) => {
              return <div className="accordion_content shimmer_content"></div> 
          })}
    </div>
  )
}

export default AccordionShimmer