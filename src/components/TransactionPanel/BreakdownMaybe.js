import React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import config from '../../config';
import { BookingBreakdown } from '../../components';

import css from './TransactionPanel.css';

// Functional component as a helper to build BookingBreakdown
const BreakdownMaybe = props => {
  const {
    className,
    rootClassName,
    breakdownClassName,
    transaction,
    transactionRole,
    itemQuantity,
  } = props;
  const loaded = transaction && transaction.id && transaction.booking && transaction.booking.id;

  const classes = classNames(rootClassName || css.breakdownMaybe, className);
  const breakdownClasses = classNames(breakdownClassName || css.breakdown);
  //console.log(transaction);

  return loaded ? (
    <div className={classes}>
      <h3 className={css.bookingBreakdownTitle}>
        <FormattedMessage id="TransactionPanel.bookingBreakdownTitle" />
      </h3>
      <BookingBreakdown
        className={breakdownClasses}
        userRole={transactionRole}
        unitType={config.bookingUnitType}
        transaction={transaction}
        booking={transaction.booking}
        itemQuantity={itemQuantity}
      />
    </div>
  ) : null;
};

export default BreakdownMaybe;
