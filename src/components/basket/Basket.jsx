import React, { useEffect } from "react";

import { Modal } from "../UI/modal/Modal";

import styled from "styled-components";

import { BasketItem } from "./BasketItem";

import { TotalAmount } from "./TotalAmount";

import { useDispatch, useSelector } from "react-redux";

import { getBasket } from "../../store/basket/basketThunk";

// import { snackBarAction } from "../../store/snackBar";f

export const Basket = ({ toggleHandler, toggle }) => {
  const { items } = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  // function incSuccessHandler() {
  //   dispatch(snackBarAction.incSuccess());
  // }

  // function incErrorHandler() {
  //   dispatch(snackBarAction.incError());
  // }

  // function decSuccessHandler() {
  //   dispatch(snackBarAction.decSuccess());
  // }

  // function decErrorHandler() {
  //   dispatch(snackBarAction.decError());
  // }

  const totalPrice = items?.reduce(
    (prev, current) => prev + +current.price.toFixed(2) * current.amount,
    0
  );

  return (
    <Modal onClick={toggleHandler} toggle={toggle}>
      <Content>
        {items?.length ? (
          <FixedWidthContainer>
            {items.map((item) => {
              return (
                item.amount > 0 && (
                  <BasketItem
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                    // incSuccessHandler={incSuccessHandler}
                    // incErrorHandler={incErrorHandler}
                    // decSuccessHandler={decSuccessHandler}
                    // decErrorHandler={decErrorHandler}
                  />
                )
              );
            })}
          </FixedWidthContainer>
        ) : null}
        <TotalAmount toggleHandler={toggleHandler} totalPrice={totalPrice} />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;

const FixedWidthContainer = styled.div`
  overflow-y: auto;
  max-height: 260px;
`;
