import Edit from "./Edit";

function Show({ id, setShowId, show, setEdit }) {
  //don't show this component if ID=0 (it means, that no record is chosen)
  if (id === 0) {
    return null;
  }

  return (
    <>
      <div className="edit-form">
        <div className="modal">
          {/* this is "Close" button */}
          <button onClick={() => setShowId(0)} type="button" className="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>
          <Edit
            setShowId={setShowId}
            showData={show()}
            setEdit={setEdit}
          ></Edit>
        </div>
      </div>
    </>
  );
}

export default Show;
