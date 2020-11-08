import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import CardWithImage from '../card/CardWithImage';
import { loadMore } from '../../actions/actions';

const Product = ({ isLoadMore, productData, loadMore }) => {
  const [productCount, setProductCount] = useState(3);

  useEffect(() => {
    loadMore(productCount)
  }, [productCount])

  const renderCard = () => {
    return productData.map(data => <CardWithImage
      key={data.name}
      title={data.name}
      image={data.image}
      text={`₹ ${data.price}`} />)
  }

  return (
    <>
      <div className="products-card-container">
        <div className="card-wrap">
          {renderCard()}
        </div>
      </div>
      <div className="button-container">
        {isLoadMore && <button onClick={() => setProductCount(productCount + 3)}>More</button>}
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  productData: state.productData,
  isLoadMore: state.isLoadMore
});

const mapDispatchToProps = dispatch => ({
  loadMore: data => dispatch(loadMore(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);