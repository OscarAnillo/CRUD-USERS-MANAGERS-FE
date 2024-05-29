import PropTypes from "prop-types";

export const BookList = ({ data, clickEditHandler, clickDeleteHandler }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="map-div-books">
          <p>
            {item.book} - {item.author}
          </p>
          <div>
            <button onClick={() => clickEditHandler(item.id)}>Edit</button>
            <button onClick={() => clickDeleteHandler(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

BookList.propTypes = {
  data: PropTypes.array,
  clickEditHandler: PropTypes.func,
  clickDeleteHandler: PropTypes.func,
};
