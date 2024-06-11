import React, { FC, useEffect, useState, useRef } from 'react'
import { useProduct } from 'vtex.product-context'
const PriceDisc = () => {

    const { product, skuSelector } = useProduct()
    // const productPrice = product.items[0].sellers.length > 1 ?  product.items[0].sellers[0].commertialOffer.Price > product.items[0].sellers[1].commertialOffer.Price ? product.items[0].sellers[1].commertialOffer.Price : product.items[0].sellers[0].commertialOffer.Price == 0 ? product.items[0].sellers[1].commertialOffer.Price : product.items[0].sellers[0].commertialOffer.Price : product.items[0].sellers[0].commertialOffer.Price
    const productPrice = product.sku.seller.commertialOffer.Price
    const linkShelf = product.link

    // console.log('Esse aq', product, skuSelector)
    const ValCalc = (productPrice - (productPrice * 0.08)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    const ValCalcRoland = (productPrice - (productPrice * 0.10)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    const SellerId = product?.items[0]?.sellers[1]?.sellerId == undefined ? "" : product.items[0]?.sellers[1]?.sellerId
    console.log({productPrice, ValCalc})
    const [DomLoad, setDomLoad] = useState(true)
    useEffect(() => {
        const linkShelf = product.link

        setTimeout(() => {
            if (document.readyState == 'complete') {
                // console.log('document', document)
                const linkShelf = product.link
                if (document?.querySelector(`[href="${linkShelf}"]`).getElementsByTagName('article')[0].getElementsByClassName('vtex-button')[0].getElementsByClassName('vtex-button__label')[0].getElementsByClassName('vtex-add-to-cart-button-0-x-buttonText')[0].innerHTML == 'Indisponível') {
                    setDomLoad(false)
                }
            }
        }, 50);
    })
    function CommertialRule() {
        if (productPrice > 100) {
            if (SellerId == undefined ? "" : SellerId == "Roland") {
                // console.log('rodou aq 2')
                return <span style={{ display: DomLoad ? 'flex' : 'none', flexDirection: 'row', alignItems: 'baseline', gap: '5px', justifyContent: 'center' }} className='vtex-product-price-1-x-sellingPrice'><span style={{ fontSize: '24px', fontWeight: '700', lineHeight: '28px', color: '#010449', fontStyle: 'normal', fontFamily: '"Montserrat",sans-serif' }}>{ValCalcRoland.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span></span>
            } else {
                // console.log('rodou aq')
                return <span style={{ display: DomLoad ? 'flex' : 'none', flexDirection: 'row', alignItems: 'baseline', gap: '5px', justifyContent: 'center' }} className='vtex-product-price-1-x-sellingPrice'><span style={{ fontSize: '24px', fontWeight: '700', lineHeight: '28px', color: '#010449', fontStyle: 'normal', fontFamily: '"Montserrat",sans-serif' }}>{ValCalc}</span></span>
            }
        } else {
            // console.log('rodou aq 3')
            return <span style={{ display: DomLoad ? 'flex' : 'none', flexDirection: 'row', alignItems: 'baseline', gap: '5px', justifyContent: 'center' }} className='vtex-product-price-1-x-sellingPrice'><span style={{ fontSize: '24px', fontWeight: '700', lineHeight: '28px', color: '#010449', fontStyle: 'normal', fontFamily: '"Montserrat",sans-serif' }}>{productPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span></span>
        }
    }
    return (
        <>
            {
                CommertialRule()
            }
        </>
    );
}

export { PriceDisc }
