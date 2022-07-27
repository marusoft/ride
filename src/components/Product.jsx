import React from "react";
import { Container } from "./styles/Container";
import { Flex } from "./styles/Flex.styled";
import {
  ProductWrapper,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductImageGuide,
  ProductTextGuide,
  GuideWrapper,
  GuideStep,
  GuideTextWrapper,
} from "./styles/Product.styled";

const Product = () => {
  return (
    <ProductWrapper>
      <Container>
        <ProductInfo>
          <ProductTitle>
            Whichride brings together multiple ride hailing providers and local
            taxi firms in one app
          </ProductTitle>
          <ProductDesc>
            Allowing riders to select the provider that offers the best price,
            service or travel time, then seamlessly book within the app
          </ProductDesc>
        </ProductInfo>
        <Flex>
          <ProductImageGuide>
            <img
              src="/image/images/iPhoneX2.png"
              alt="how to use product guide avatar"
            />
          </ProductImageGuide>
          <ProductTextGuide>
            <GuideWrapper>
              <GuideStep bg="#f2c94c">Step 1</GuideStep>
              <GuideTextWrapper>
                <h4>Enter location</h4>
                <p>
                  Enter your destination to see a list of taxi providers near
                  you.
                </p>
              </GuideTextWrapper>
            </GuideWrapper>
            <GuideWrapper>
              <GuideStep bg="#F2F2F2">Step 2</GuideStep>
              <GuideTextWrapper>
                <h4>Find the perfect ride</h4>
                <p>
                  Filter results by driver rating, driver sex, waiting times,
                  price or speed. Reduce carbon footprint by only showing hybrid
                  or electric cars.
                </p>
              </GuideTextWrapper>
            </GuideWrapper>
            <GuideWrapper>
              <GuideStep bg="#F2F2F2">Step 3</GuideStep>
              <GuideTextWrapper>
                <h4>Pay and Save</h4>
                <p>
                  Once you select a ride, we search the web for coupons to get
                  you an even better deal, then book seemlessly within our app
                  and earn points while you ride.
                </p>
              </GuideTextWrapper>
            </GuideWrapper>
          </ProductTextGuide>
        </Flex>
      </Container>
    </ProductWrapper>
  );
};

export default Product;
