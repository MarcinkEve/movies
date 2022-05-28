import Create from "./Create";

function Insert({ id, setInsert, setCreate }) {
  //don't show this component if ID=0 (it means, that no record is chosen)
  if (id === 0) {
    return null;
  }
  
  return (
    <>
      <div className="modal">
        {/* this is "Close" button */}
        <button onClick={() => setInsert(0)} type="button" className="close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div>
        <Create setCreate={setCreate} setInsert={setInsert}></Create>
      </div>
    </>
  );
}

export default Insert;
