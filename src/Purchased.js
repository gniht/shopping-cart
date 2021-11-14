

function Purchased(props) {
  return (
    <div className="purchase">
      <h1>Your purchase is complete.</h1>
      <h4>{`${props.total} has been billed to your card on file.`}</h4>
      <h6>*Delivery times vary up and can take up to 3 years.  Thank you for your patience.</h6>
    </div>
  );
}

export default Purchased;