

export default function Faq() {
    return (
      <div className='text-black text-center py-16'>
      <h1 className="text-4xl font-bold py-8">FAQ</h1>
       <div className="collapse collapse-arrow ">
    <input type="radio" name="my-accordion-2"  /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow ">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow ">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
     </div>
    )
}