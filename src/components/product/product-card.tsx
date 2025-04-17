"use client"

import styled from "styled-components"

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: white;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const ProductName = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
`

const ProductCategory = styled.div`
  font-size: 16px;
  color: #64748b;
`

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #fb923c; /* Pastel orange color */
  text-align: end;
`

interface ProductCardProps {
  name: string
  category: string
  price: number
  stock: number
}

export default function ProductCard({ name, category, price, stock }: ProductCardProps) {
  console.log(stock)
  return (
    <Card>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductCategory>{category}</ProductCategory>
      </ProductInfo>
      <ProductInfo>
        <ProductPrice>${price.toFixed(2)}</ProductPrice>
        <ProductCategory>{`${stock} unidades`}</ProductCategory>
      </ProductInfo>
    </Card>
  )
}
