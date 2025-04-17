"use client"
import { FaPrint, FaInfoCircle, FaEdit } from "react-icons/fa"
import styled from "styled-components"

// Styled Components
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: white;
  transition: box-shadow 0.2s;
  margin-bottom: 12px;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`

const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const CustomerName = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
`

const CustomerDate = styled.div`
  font-size: 14px;
  color: #64748b;
`

const PriceInfo = styled.div`
  font-weight: 700;
  font-size: 18px;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`

const CardWrapper = styled.div`
  position: relative;
`

const ActionButton = styled.button<{ $variant?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => {
    switch (props.$variant) {
      case "info":
        return "#e0f2fe"
      case "edit":
        return "#ecfccb"
      case "print":
        return "#f1f5f9"
      default:
        return "#f1f5f9"
    }
  }};
  color: ${(props) => {
    switch (props.$variant) {
      case "info":
        return "#0284c7"
      case "edit":
        return "#65a30d"
      case "print":
        return "#64748b"
      default:
        return "#64748b"
    }
  }};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => {
      switch (props.$variant) {
        case "info":
          return "#bae6fd"
        case "edit":
          return "#d9f99d"
        case "print":
          return "#e2e8f0"
        default:
          return "#e2e8f0"
      }
    }};
  }
`

interface SaleCardProps {
  customer: string
  date: string
  total: number
  onPrint?: () => void
  onInfo?: () => void
  onEdit?: () => void
}

export default function SaleCard({ customer, date, total, onPrint, onInfo, onEdit }: SaleCardProps) {
  return (
    <CardWrapper>
      <Card>
        <CardContent>
          <CustomerInfo>
            <CustomerName>{customer}</CustomerName>
            <CustomerDate>{date}</CustomerDate>
          </CustomerInfo>
          <PriceInfo>{total}</PriceInfo>
        </CardContent>

        <ActionButtons>
          <ActionButton $variant="print" title="Imprimir" onClick={onPrint}>
            <FaPrint size={14} />
          </ActionButton>

          <ActionButton $variant="info" title="Más información" onClick={onInfo}>
            <FaInfoCircle size={14} />
          </ActionButton>

          <ActionButton $variant="edit" title="Editar" onClick={onEdit}>
            <FaEdit size={14} />
          </ActionButton>
        </ActionButtons>
      </Card>
    </CardWrapper>
  )
}
