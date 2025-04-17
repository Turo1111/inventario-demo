"use client"

import { useState } from "react"
import { FaArrowLeft, FaPlus, FaMinus, FaTrash, FaSave } from "react-icons/fa"
import styled from "styled-components"
import Link from "next/link"

// Styled Components
const Container = styled.div`
  padding: 16px;
  
  @media (min-width: 768px) {
    padding: 24px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

const BackButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: #f1f5f9;
  color: #64748b;
  margin-right: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #e2e8f0;
  }
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Section = styled.section`
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
`

const SectionHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  font-size: 16px;
  background-color: #f8fafc;
`

const SectionContent = styled.div`
  padding: 16px;
`

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 8px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 3px;
  }
`

const ProductCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #94a3b8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`

const ProductName = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
`

const ProductPrice = styled.div`
  color: #0f172a;
  font-weight: 600;
`

const ProductStock = styled.div`
  font-size: 12px;
  color: #64748b;
  margin-top: 4px;
`

const FormGroup = styled.div`
  margin-bottom: 16px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #64748b;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #94a3b8;
    box-shadow: 0 0 0 1px rgba(148, 163, 184, 0.2);
  }
`

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #94a3b8;
    box-shadow: 0 0 0 1px rgba(148, 163, 184, 0.2);
  }
`

const SelectedProductsList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 3px;
  }
`

const SelectedProductItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`

const ProductInfo = styled.div`
  flex: 1;
`

const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`

const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: none;
  background-color: #f1f5f9;
  color: #64748b;
  cursor: pointer;
  
  &:hover {
    background-color: #e2e8f0;
  }
`

const QuantityInput = styled.input`
  width: 40px;
  text-align: center;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  margin: 0 8px;
  padding: 4px;
  
  &:focus {
    outline: none;
    border-color: #94a3b8;
  }
`

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: none;
  background-color: #fee2e2;
  color: #ef4444;
  cursor: pointer;
  
  &:hover {
    background-color: #fecaca;
  }
`

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
  font-weight: 600;
`

const TotalLabel = styled.div`
  font-size: 16px;
`

const TotalAmount = styled.div`
  font-size: 20px;
  color: #0f172a;
`

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`

const Button = styled.button<{ $variant?: "primary" | "secondary" }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  background-color: ${(props) => (props.$variant === "primary" ? "#0f172a" : "#f1f5f9")};
  color: ${(props) => (props.$variant === "primary" ? "white" : "#64748b")};
  border: none;
  
  &:hover {
    background-color: ${(props) => (props.$variant === "primary" ? "#1e293b" : "#e2e8f0")};
  }
`

// Sample data
const sampleProducts = [
  { id: 1, name: "Laptop HP 15", price: 899.99, stock: 15 },
  { id: 2, name: 'Monitor Dell 24"', price: 249.99, stock: 23 },
  { id: 3, name: "Teclado Logitech", price: 59.99, stock: 42 },
  { id: 4, name: "Mouse Inalámbrico", price: 29.99, stock: 38 },
  { id: 5, name: "Auriculares Sony", price: 149.99, stock: 12 },
  { id: 6, name: "Impresora Canon", price: 199.99, stock: 7 },
  { id: 7, name: "Disco SSD 500GB", price: 89.99, stock: 31 },
  { id: 8, name: "Memoria RAM 16GB", price: 79.99, stock: 19 },
  { id: 9, name: "Webcam HD", price: 49.99, stock: 26 },
  { id: 10, name: "Router WiFi", price: 69.99, stock: 14 },
]

const sampleCustomers = [
  { id: 1, name: "Juan Pérez" },
  { id: 2, name: "María González" },
  { id: 3, name: "Carlos Rodríguez" },
  { id: 4, name: "Ana Martínez" },
  { id: 5, name: "Roberto Fernández" },
]

interface SelectedProduct {
  id: number
  name: string
  price: number
  quantity: number
}

export default function NuevaVentaPage() {
  const [customer, setCustomer] = useState("")
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([])

  const handleAddProduct = (product: (typeof sampleProducts)[0]) => {
    const existingProduct = selectedProducts.find((p) => p.id === product.id)

    if (existingProduct) {
      setSelectedProducts(selectedProducts.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)))
    } else {
      setSelectedProducts([
        ...selectedProducts,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ])
    }
  }

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return

    setSelectedProducts(selectedProducts.map((p) => (p.id === id ? { ...p, quantity } : p)))
  }

  const handleRemoveProduct = (id: number) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== id))
  }

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }

  return (
    <Container>
      <Header>
        <Link href="/venta" passHref legacyBehavior>
          <BackButton>
            <FaArrowLeft />
          </BackButton>
        </Link>
        <Title>Nueva Venta</Title>
      </Header>

      <Content>
        <div>
          <Section>
            <SectionHeader>Datos de la Venta</SectionHeader>
            <SectionContent>
              <FormGroup>
                <Label htmlFor="customer">Cliente</Label>
                <Select id="customer" value={customer} onChange={(e) => setCustomer(e.target.value)}>
                  <option value="">Seleccionar cliente</option>
                  {sampleCustomers.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="date">Fecha</Label>
                <Input id="date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="notes">Notas</Label>
                <Input id="notes" as="textarea" rows={3} placeholder="Agregar notas adicionales..." />
              </FormGroup>
            </SectionContent>
          </Section>

          <Section style={{ marginTop: "24px" }}>
            <SectionHeader>Productos Seleccionados</SectionHeader>
            <SectionContent>
              {selectedProducts.length === 0 ? (
                <div style={{ textAlign: "center", padding: "24px 0", color: "#94a3b8" }}>
                  No hay productos seleccionados
                </div>
              ) : (
                <>
                  <SelectedProductsList>
                    {selectedProducts.map((product) => (
                      <SelectedProductItem key={product.id}>
                        <ProductInfo>
                          <ProductName>{product.name}</ProductName>
                          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                        </ProductInfo>

                        <ProductQuantity>
                          <QuantityButton onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>
                            <FaMinus size={12} />
                          </QuantityButton>

                          <QuantityInput
                            type="number"
                            min="1"
                            value={product.quantity}
                            onChange={(e) => handleQuantityChange(product.id, Number.parseInt(e.target.value) || 1)}
                          />

                          <QuantityButton onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>
                            <FaPlus size={12} />
                          </QuantityButton>
                        </ProductQuantity>

                        <DeleteButton onClick={() => handleRemoveProduct(product.id)}>
                          <FaTrash size={12} />
                        </DeleteButton>
                      </SelectedProductItem>
                    ))}
                  </SelectedProductsList>

                  <TotalSection>
                    <TotalLabel>Total</TotalLabel>
                    <TotalAmount>${calculateTotal().toFixed(2)}</TotalAmount>
                  </TotalSection>
                </>
              )}

              <ActionButtons>
                <Link href="/venta" passHref legacyBehavior>
                  <Button as="a" $variant="secondary">
                    Cancelar
                  </Button>
                </Link>
                <Button $variant="primary">
                  <FaSave size={14} />
                  Guardar Venta
                </Button>
              </ActionButtons>
            </SectionContent>
          </Section>
        </div>

        <Section>
          <SectionHeader>Lista de Productos</SectionHeader>
          <SectionContent>
            <ProductList>
              {sampleProducts.map((product) => (
                <ProductCard key={product.id} onClick={() => handleAddProduct(product)}>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                  <ProductStock>Stock: {product.stock}</ProductStock>
                </ProductCard>
              ))}
            </ProductList>
          </SectionContent>
        </Section>
      </Content>
    </Container>
  )
}
