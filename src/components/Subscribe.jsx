import React from "react";

import {
  SubscribeWrapper,
  SubscribeTitle,
  SubscribeDesc,
  SubscribeForm,
  SubscribeInfo,
} from "./styles/Subscribe.styled";

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <SubscribeInfo>
        <SubscribeTitle>Sign up to our beta form</SubscribeTitle>
        <SubscribeDesc>
          Sign up to our mailing list to find out more information and keep up
          to date about our activities
        </SubscribeDesc>
      </SubscribeInfo>
      <SubscribeForm>
        <input type="email" placeholder="Email" required />
        <button type="submit">Subscribe</button>
      </SubscribeForm>
    </SubscribeWrapper>
  );
};

export default Subscribe;
