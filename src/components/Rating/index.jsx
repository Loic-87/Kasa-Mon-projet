import './Rating.scss'

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {stars.map((star) => (
        <span
          key={star}
          className={star <= Number(rating) ? 'rating-star rating-star--filled' : 'rating-star'}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default Rating