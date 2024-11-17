import "./Something.scss";

function Something() {
  const news = [
    {
      title: "Title number 1 or something",
      subtitle:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptas rerum odio magni voluptates hic consequatur ducimus, ",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptas rerum odio magni voluptates hic consequatur ducimus, exercitationem itaque dicta facilis ut magnam, et deleniti perferendis quidem fugit, ipsa ex sequi quibusdam dolore? Libero quisquam in neque. Laudantium vero facere possimus soluta enim! Adipisci quae nostrum optio possimus soluta maiores, laudantium iste ea fugiat sint officiis officia facilis praesentium quibusdam.",
      category: "News",
    },
    {
      title: "Title number 1 or something",
      subtitle:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptas rerum odio magni voluptates hic consequatur ducimus, ",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptas rerum odio magni voluptates hic consequatur ducimus, exercitationem itaque dicta facilis ut magnam, et deleniti perferendis quidem fugit, ipsa ex sequi quibusdam dolore? Libero quisquam in neque. Laudantium vero facere possimus soluta enim! Adipisci quae nostrum optio possimus soluta maiores, laudantium iste ea fugiat sint officiis officia facilis praesentium quibusdam.",
      category: "News",
    },
    {
      title: "Title number 1 or something",
      subtitle:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptas rerum odio magni voluptates hic consequatur ducimus, ",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptas rerum odio magni voluptates hic consequatur ducimus, exercitationem itaque dicta facilis ut magnam, et deleniti perferendis quidem fugit, ipsa ex sequi quibusdam dolore? Libero quisquam in neque. Laudantium vero facere possimus soluta enim! Adipisci quae nostrum optio possimus soluta maiores, laudantium iste ea fugiat sint officiis officia facilis praesentium quibusdam.",
      category: "News",
    },
    {
      title: "Title number 1 or something",
      subtitle:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptas rerum odio magni voluptates hic consequatur ducimus, ",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptas rerum odio magni voluptates hic consequatur ducimus, exercitationem itaque dicta facilis ut magnam, et deleniti perferendis quidem fugit, ipsa ex sequi quibusdam dolore? Libero quisquam in neque. Laudantium vero facere possimus soluta enim! Adipisci quae nostrum optio possimus soluta maiores, laudantium iste ea fugiat sint officiis officia facilis praesentium quibusdam.",
      category: "News",
    },
  ];
  const month = new Date().getMonth();
  function getMonthName(month) {
    switch (month) {
      case 0:
        return "JAN";
      case 1:
        return "FEB";
      case 2:
        return "MAR";
      case 3:
        return "APR";
      case 4:
        return "MAY";
      case 5:
        return "JUN";
      case 6:
        return "JUL";
      case 7:
        return "AUG";
      case 8:
        return "SEP";
      case 9:
        return "OCT";
      case 10:
        return "NOV";
      case 11:
        return "DEC";
      default:
        return "Invalid month number";
    }
  }

  return (
    <>
      <section className="something__container" id="news">
        <div className="something__container--inner">
          <h2>News</h2>
          <div className="something__container--inner-content">
            {news.map((item, index) => (
              <div
                key={index}
                className="something__container--inner-content-block"
              >
                <div className="month">
                  {" "}
                  <p>{new Date().getDate()}</p>
                  <p>{getMonthName(month)}</p>
                </div>
                <img src="//unsplash.it/300/150" alt="" />
                <h3>{item.title}</h3>
                <h5>{item.category}</h5>
                <p>{item.subtitle}</p>
                <button>Show More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Something;
