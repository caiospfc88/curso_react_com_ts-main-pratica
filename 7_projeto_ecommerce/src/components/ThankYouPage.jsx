import { useLocation, useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = location.state.cartItems;

  return (
    <div>
      <ul>
        {items.map((item) => (
          <p>{item.name}</p>
        ))}
      </ul>
    </div>
  );
};
export default ThankYouPage;
