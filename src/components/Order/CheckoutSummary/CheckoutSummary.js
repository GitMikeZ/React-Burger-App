import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
	return (
		<div className={classes.CheckoutSummary}>
			<h1>Your custom made burger!</h1>
			<div>
				<div stlyle={{width: '300px', margin: 'auto'}}>
					<Burger ingredients={props.ingredients}/>
				</div>
				<Button
					btnType="Danger"
					clicked>CANCEL</Button>
				<Button btnType="Success">CONTINUE</Button>
			</div>
		</div>
	)
}

export default CheckoutSummary;