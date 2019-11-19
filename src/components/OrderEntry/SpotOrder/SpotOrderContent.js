import React from 'react';
import { AutoSizer } from 'react-virtualized';
import { ContentWrapper, Content } from '../styles';
import InputCell from '../InputCell';

export const SpotOrderContent = ({
  value,
  handleInputChange,
  symbol,
  isBuy,
  max,
  type,
  isLeft,
  animation,
  isFiat,
  setEndTouch,
  originUSDPos
}) => (
  <ContentWrapper>
    <AutoSizer>
      {({ width, height }) => (
        <Content width={width} height={height}>
          <InputCell
            width={width - 2}
            height={48}
            value={value}
            handleInputChange={handleInputChange}
            symbol={symbol}
            isBuy={isBuy}
            max={max}
            type={type}
            isLeft={isLeft}
            animation={animation}
            isFiat={isFiat}
            setEndTouch={setEndTouch}
            originUSDPos={originUSDPos}
          />
          <InputCell
            width={width - 2}
            height={48}
            value={value}
            handleInputChange={handleInputChange}
            symbol={symbol}
            isBuy={isBuy}
            max={max}
            type={type}
            isLeft={isLeft}
            isHover
            animation={animation}
            isFiat={isFiat}
            setEndTouch={setEndTouch}
            originUSDPos={originUSDPos}
          />
        </Content>
      )}
    </AutoSizer>
  </ContentWrapper>
);
