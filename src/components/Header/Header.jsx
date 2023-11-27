import React from "react";
import styled from "styled-components";
import { Title, SubTitle } from "../Titles/StyledTitles";

const TitlesBox = styled.div`
  width: 63.4375rem;

  @media (max-width: 768px) {
    width: 32.5rem;
  }

  @media (max-width: 376px) {
    width: 20.4375rem;
  }
`;
const HeaderWrapper = styled.div`
  @media (max-width: 768px) {
    width: 48rem;
  }

  @media (max-width: 376px) {
    width: 20.4375rem;
  }
`;
const LogoIconWrapper = styled.div``;

const Header = () => (
  <HeaderWrapper>
    <LogoIconWrapper>
      <svg
        width="147"
        height="32"
        viewBox="0 0 147 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.83986 17.9919V14.7119H14.1039L13.6239 15.5439C13.6239 15.4586 13.6239 15.3786 13.6239 15.3039C13.6239 15.2186 13.6239 15.1386 13.6239 15.0639C13.6239 14.4559 13.4799 13.8746 13.1919 13.3199C12.9039 12.7546 12.4559 12.2959 11.8479 11.9439C11.2505 11.5813 10.4825 11.3999 9.54386 11.3999C8.60519 11.3999 7.79452 11.6026 7.11186 12.0079C6.43986 12.4026 5.92252 12.9733 5.55986 13.7199C5.20786 14.4666 5.03186 15.3679 5.03186 16.4239C5.03186 17.5119 5.20252 18.4453 5.54386 19.2239C5.89586 19.9919 6.41319 20.5839 7.09586 20.9999C7.78919 21.4159 8.64786 21.6239 9.67186 21.6239C10.3332 21.6239 10.9039 21.5653 11.3839 21.4479C11.8639 21.3199 12.2532 21.1599 12.5519 20.9679C12.8612 20.7759 13.0959 20.5626 13.2559 20.3279C13.4159 20.0933 13.5119 19.8639 13.5439 19.6399H18.4399C18.3759 20.3546 18.1305 21.0586 17.7039 21.7519C17.2772 22.4346 16.6852 23.0533 15.9279 23.6079C15.1705 24.1519 14.2479 24.5839 13.1599 24.9039C12.0825 25.2239 10.8505 25.3839 9.46386 25.3839C7.58652 25.3839 5.94919 25.0106 4.55186 24.2639C3.15452 23.5066 2.07186 22.4666 1.30386 21.1439C0.535855 19.8106 0.151855 18.2746 0.151855 16.5359C0.151855 14.7759 0.541189 13.2346 1.31986 11.9119C2.10919 10.5786 3.20252 9.54394 4.59986 8.80794C6.00786 8.06128 7.63452 7.68794 9.47986 7.68794C11.3679 7.68794 12.9999 8.06661 14.3759 8.82394C15.7519 9.57061 16.8132 10.6213 17.5599 11.9759C18.3065 13.3199 18.6799 14.8879 18.6799 16.6799C18.6799 16.9466 18.6745 17.2026 18.6639 17.4479C18.6532 17.6933 18.6372 17.8746 18.6159 17.9919H2.83986Z"
          fill="#191826"
        />
        <path
          d="M28.4392 25.3839C27.0205 25.3839 25.7138 25.0479 24.5192 24.3759C23.3245 23.6933 22.3645 22.6853 21.6392 21.3519C20.9138 20.0186 20.5512 18.3759 20.5512 16.4239C20.5512 14.5573 20.9192 12.9733 21.6552 11.6719C22.4018 10.3706 23.3725 9.38394 24.5672 8.71194C25.7725 8.02928 27.0632 7.68794 28.4392 7.68794C29.7832 7.68794 31.0098 8.02928 32.1192 8.71194C33.2392 9.39461 34.1352 10.3279 34.8072 11.5119C35.4792 12.6853 35.8152 14.0399 35.8152 15.5759C35.8152 15.6293 35.8152 15.6826 35.8152 15.7359C35.8152 15.7786 35.8152 15.8266 35.8152 15.8799L33.6712 15.9119C33.6712 15.8799 33.6712 15.8479 33.6712 15.8159C33.6712 15.7733 33.6712 15.7359 33.6712 15.7039C33.6712 14.9039 33.4792 14.2159 33.0952 13.6399C32.7112 13.0639 32.2152 12.6213 31.6072 12.3119C30.9992 11.9919 30.3645 11.8319 29.7032 11.8319C28.6045 11.8319 27.6552 12.1999 26.8552 12.9359C26.0552 13.6613 25.6552 14.8239 25.6552 16.4239C25.6552 18.0239 26.0552 19.2026 26.8552 19.9599C27.6658 20.7066 28.6152 21.0799 29.7032 21.0799C30.3858 21.0799 31.0312 20.9199 31.6392 20.5999C32.2472 20.2693 32.7378 19.8053 33.1112 19.2079C33.4845 18.6106 33.6712 17.9066 33.6712 17.0959L35.8152 17.2079C35.8152 18.7333 35.4845 20.1146 34.8232 21.3519C34.1725 22.5786 33.2872 23.5599 32.1672 24.2959C31.0578 25.0213 29.8152 25.3839 28.4392 25.3839ZM33.6712 31.9919V8.00794H38.6472V31.9919H33.6712Z"
          fill="#191826"
        />
        <path
          d="M48.0165 25.3199C46.8111 25.3199 45.8191 25.1279 45.0405 24.7439C44.2618 24.3493 43.6485 23.8213 43.2005 23.1599C42.7525 22.4986 42.4378 21.7626 42.2565 20.9519C42.0751 20.1413 41.9845 19.3199 41.9845 18.4879C41.9845 18.1039 41.9845 17.6986 41.9845 17.2719C41.9845 16.8453 41.9845 16.4079 41.9845 15.9599V8.00794H46.9445V15.1759C46.9445 15.5386 46.9445 15.8906 46.9445 16.2319C46.9445 16.5733 46.9445 16.8879 46.9445 17.1759C46.9445 17.8906 47.0245 18.5466 47.1845 19.1439C47.3445 19.7413 47.6378 20.2213 48.0645 20.5839C48.5018 20.9466 49.1205 21.1279 49.9205 21.1279C50.6991 21.1279 51.3605 20.9093 51.9045 20.4719C52.4485 20.0239 52.8645 19.4533 53.1525 18.7599C53.4405 18.0666 53.5845 17.3519 53.5845 16.6159L54.9765 17.7519C54.9765 18.8186 54.8111 19.8106 54.4805 20.7279C54.1605 21.6453 53.7018 22.4506 53.1045 23.1439C52.5071 23.8266 51.7765 24.3599 50.9125 24.7439C50.0591 25.1279 49.0938 25.3199 48.0165 25.3199ZM53.5845 24.9999V8.00794H58.5445V24.9999H53.5845Z"
          fill="#191826"
        />
        <path
          d="M67.5813 25.3519C66.3439 25.3519 65.2399 25.1546 64.2693 24.7599C63.3093 24.3653 62.5573 23.7946 62.0133 23.0479C61.4693 22.3013 61.1973 21.3946 61.1973 20.3279C61.1973 19.1226 61.5279 18.1413 62.1893 17.3839C62.8506 16.6266 63.7253 16.0506 64.8133 15.6559C65.9119 15.2506 67.1013 14.9839 68.3813 14.8559C70.2479 14.6746 71.5333 14.5093 72.2373 14.3599C72.9519 14.2106 73.3093 13.9493 73.3093 13.5759C73.3093 13.5653 73.3093 13.5546 73.3093 13.5439C73.3093 12.9146 73.0053 12.4186 72.3973 12.0559C71.7999 11.6933 70.9626 11.5119 69.8853 11.5119C68.7439 11.5119 67.8693 11.7199 67.2613 12.1359C66.6639 12.5413 66.3653 13.1653 66.3653 14.0079H61.4853C61.4853 12.6426 61.8533 11.4906 62.5893 10.5519C63.3359 9.61328 64.3439 8.90394 65.6133 8.42394C66.8826 7.93328 68.3173 7.68794 69.9173 7.68794C71.4106 7.68794 72.7919 7.91728 74.0613 8.37594C75.3306 8.82394 76.3493 9.50128 77.1173 10.4079C77.8959 11.3146 78.2853 12.4666 78.2853 13.8639C78.2853 14.0879 78.2853 14.3119 78.2853 14.5359C78.2853 14.7493 78.2853 14.9679 78.2853 15.1919V21.2079C78.2853 21.6453 78.2959 22.0666 78.3173 22.4719C78.3493 22.8666 78.4133 23.2293 78.5093 23.5599C78.6159 23.9333 78.7493 24.2426 78.9093 24.4879C79.0693 24.7333 79.2026 24.9039 79.3093 24.9999H74.4293C74.3546 24.9253 74.2373 24.7706 74.0773 24.5359C73.9279 24.3013 73.7999 24.0293 73.6933 23.7199C73.5653 23.3466 73.4693 22.9733 73.4053 22.5999C73.3519 22.2159 73.3253 21.7679 73.3253 21.2559L74.3493 21.9599C74.0506 22.6639 73.5653 23.2719 72.8933 23.7839C72.2319 24.2853 71.4426 24.6746 70.5253 24.9519C69.6186 25.2186 68.6373 25.3519 67.5813 25.3519ZM68.9093 21.6399C69.6879 21.6399 70.4133 21.5013 71.0853 21.2239C71.7679 20.9359 72.3226 20.4879 72.7493 19.8799C73.1759 19.2719 73.3893 18.4773 73.3893 17.4959V15.7839L74.6213 16.9839C73.9173 17.2399 73.1013 17.4533 72.1733 17.6239C71.2559 17.7839 70.3386 17.9119 69.4213 18.0079C68.3333 18.1146 67.5173 18.3013 66.9733 18.5679C66.4399 18.8239 66.1733 19.2613 66.1733 19.8799C66.1733 20.4666 66.4026 20.9093 66.8613 21.2079C67.3199 21.4959 68.0026 21.6399 68.9093 21.6399Z"
          fill="#191826"
        />
        <path
          d="M86.6066 -0.00805664V24.9999H81.7106V-0.00805664H86.6066Z"
          fill="#191826"
        />
        <path
          d="M89.9279 24.9999V8.00794H94.8399V24.9999H89.9279ZM92.3759 5.23994C91.6079 5.23994 90.9359 5.03728 90.3599 4.63194C89.7946 4.22661 89.5119 3.65594 89.5119 2.91994C89.5119 2.17328 89.7946 1.59728 90.3599 1.19194C90.9359 0.786611 91.6079 0.583944 92.3759 0.583944C93.1545 0.583944 93.8266 0.786611 94.3919 1.19194C94.9679 1.59728 95.2559 2.17328 95.2559 2.91994C95.2559 3.66661 94.9679 4.24261 94.3919 4.64794C93.8266 5.04261 93.1545 5.23994 92.3759 5.23994Z"
          fill="#191826"
        />
        <path
          d="M102.386 21.1119H111.602V24.9999H97.0744V21.3199L106.066 11.7039L106.178 11.8799H97.3944V8.00794H111.41V11.6879L102.498 21.2719L102.386 21.1119Z"
          fill="#191826"
        />
        <path
          d="M115.541 17.9919V14.7119H126.805L126.325 15.5439C126.325 15.4586 126.325 15.3786 126.325 15.3039C126.325 15.2186 126.325 15.1386 126.325 15.0639C126.325 14.4559 126.181 13.8746 125.893 13.3199C125.605 12.7546 125.157 12.2959 124.549 11.9439C123.952 11.5813 123.184 11.3999 122.245 11.3999C121.307 11.3999 120.496 11.6026 119.813 12.0079C119.141 12.4026 118.624 12.9733 118.261 13.7199C117.909 14.4666 117.733 15.3679 117.733 16.4239C117.733 17.5119 117.904 18.4453 118.245 19.2239C118.597 19.9919 119.115 20.5839 119.797 20.9999C120.491 21.4159 121.349 21.6239 122.373 21.6239C123.035 21.6239 123.605 21.5653 124.085 21.4479C124.565 21.3199 124.955 21.1599 125.253 20.9679C125.563 20.7759 125.797 20.5626 125.957 20.3279C126.117 20.0933 126.213 19.8639 126.245 19.6399H131.141C131.077 20.3546 130.832 21.0586 130.405 21.7519C129.979 22.4346 129.387 23.0533 128.629 23.6079C127.872 24.1519 126.949 24.5839 125.861 24.9039C124.784 25.2239 123.552 25.3839 122.165 25.3839C120.288 25.3839 118.651 25.0106 117.253 24.2639C115.856 23.5066 114.773 22.4666 114.005 21.1439C113.237 19.8106 112.853 18.2746 112.853 16.5359C112.853 14.7759 113.243 13.2346 114.021 11.9119C114.811 10.5786 115.904 9.54394 117.301 8.80794C118.709 8.06128 120.336 7.68794 122.181 7.68794C124.069 7.68794 125.701 8.06661 127.077 8.82394C128.453 9.57061 129.515 10.6213 130.261 11.9759C131.008 13.3199 131.381 14.8879 131.381 16.6799C131.381 16.9466 131.376 17.2026 131.365 17.4479C131.355 17.6933 131.339 17.8746 131.317 17.9919H115.541Z"
          fill="#191826"
        />
        <path
          d="M134.037 24.9999V8.00794H139.013V13.8639L137.989 13.2239C138.106 12.4239 138.319 11.6879 138.629 11.0159C138.938 10.3439 139.338 9.76261 139.829 9.27194C140.319 8.77061 140.901 8.38128 141.573 8.10394C142.255 7.82661 143.034 7.68794 143.909 7.68794C144.591 7.68794 145.125 7.74128 145.509 7.84794C145.903 7.94394 146.149 8.01861 146.245 8.07194L145.429 12.5199C145.333 12.4666 145.119 12.3813 144.789 12.2639C144.458 12.1466 144.031 12.0879 143.509 12.0879C142.655 12.0879 141.941 12.2319 141.365 12.5199C140.789 12.8079 140.325 13.1919 139.973 13.6719C139.631 14.1413 139.386 14.6639 139.237 15.2399C139.087 15.8159 139.013 16.3973 139.013 16.9839V24.9999H134.037Z"
          fill="#191826"
        />
      </svg>
    </LogoIconWrapper>
    <TitlesBox>
      <Title>We make your music sound extraordinary.</Title>
      <SubTitle>
        A system audio equalizer specifically designed for Android and iOS.
        Freely tune the way your music sounds with a professional grade
        parametric EQ & volume mixer. Control bass, mids, treble, gain control,
        reverb, and more!
      </SubTitle>
    </TitlesBox>
  </HeaderWrapper>
);

export default Header;
