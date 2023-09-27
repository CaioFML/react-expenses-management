import classes from './CartButton.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
    // dispatch(uiActions.showNotification({
    //   status: 'pending',
    //   title: 'Sending...',
    //   message: 'Sending cart data!',
    // }));
    // fetch('https://react-http-6b9a7-default-rtdb.firebaseio.com/cart.json', {
    //   method: 'PUT',
    //   body: JSON.stringify(cart),
    // }).then(response => {
    //   dispatch(uiActions.showNotification({
    //     status: 'success',
    //     title: 'Success!',
    //     message: 'Sent cart data successfully!',
    //   }));
    // }).catch(error => {
    //   dispatch(uiActions.showNotification({
    //     status: 'error',
    //     title: 'Error!',
    //     message: 'Sending cart data failed!',
    //   }));
    // });
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
