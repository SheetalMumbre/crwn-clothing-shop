

const App = () => {
  const categories = [
    {
      id:1,
      title: 'Hats'
    },
    {
      id:2,
      title: 'Women'
    },
    {
      id:3,
      title: 'Men'
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({id,title})=>(
        <div key={id} className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default App;
