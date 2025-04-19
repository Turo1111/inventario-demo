import React from 'react'
import styled from 'styled-components'
import { BiTrash } from 'react-icons/bi'

interface ItemLV {
    name: string
    downQTY10: ()=>void
    downQTY:()=>void
    upQTY:()=>void
    upQTY10:()=>void
    cantidad: number
    total: number
    deleteItem:()=>void
}

export default function ItemLineaVenta({name, downQTY, downQTY10, upQTY, upQTY10, cantidad, total, deleteItem}: ItemLV) {
  return (
    <Item>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Description>{name}</Description>
            <IconWrapper>
                <BiTrash style={{fontSize: 20, margin: '0 5px', color: '#F7A4A4'}} onClick={deleteItem}/>
            </IconWrapper>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <ContainerHandler>
                <div>
                    <div style={{display: 'flex', width: '100%'}}>
                        <div style={{display: 'flex'}}>
                            <ButtonHandler onClick={downQTY10}>-10</ButtonHandler>
                            <ButtonHandler onClick={downQTY}>-</ButtonHandler>
                        </div>
                        <QtyHandler>{cantidad}</QtyHandler>
                        <div style={{display: 'flex'}}>
                            <ButtonHandler onClick={upQTY} >+</ButtonHandler>
                            <ButtonHandler onClick={upQTY10}>+10</ButtonHandler>
                        </div>
                    </div>
                </div>
            </ContainerHandler>
            <h2 style={{fontSize: 16, fontWeight: 600, color: '#FA9B50', textAlign: 'center'}}>$ {total}</h2>
        </div>
        
    </Item>
  )
}

const Item = styled.li `
  list-style: none;
  padding: 8px;
  font-weight: 600;
  width: 100%;
  border-bottom: 1px solid #d1d1d1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    padding: 15px 0;
  }
`
const Description = styled.h2 `
    font-size: 16px;
    color: #252525;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 95%;
    @media only screen and (max-width: 500px) { 
        font-size: 16px
    } 
`

const QtyHandler = styled.div `
    font-size: 16px;
    color: #252552;
    padding: 5px 10px;
    &:hover {
        background-color: #d9d9d9;
        border-radius: 100%;
        color: #6A5BCD;
    }
`

const ButtonHandler = styled.div `
    font-size: 14px; 
    font-weight: 400; 
    color: #7F8487; 
    padding: 5px 10px;
    &:hover {
        background-color: #d9d9d9;
        border-radius: 100%;
        color: #6A5BCD;
    }
`
const ContainerHandler = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 15px;
    transition: transform .5s linear;
    cursor: pointer;
    &:hover {
        background-color: #d1d1d1;
    }
`