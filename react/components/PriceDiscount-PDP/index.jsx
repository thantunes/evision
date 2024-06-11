import React, { FC } from 'react'
import { useProduct } from 'vtex.product-context'


const PriceDisc = () => {

    const { product } = useProduct()
    const SellerID = product.items[0].sellers.filter(seller => seller.sellerDefault)
    console.log({SellerID})
    console.log({price: SellerID[0].commertialOffer.Price})
    const productPrice = SellerID[0].commertialOffer.Price
    const ValCalcRoland = (productPrice - (productPrice * 0.10)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    const ValCalc = (productPrice - (productPrice * 0.08)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    console.log('Este é o produto', product)
    function CommertialRule() {
        if (productPrice > 100) {
            if (product.items[0].sellers[0].sellerId == "Roland") {
                console.log('true')
                return <span className='vtex-product-price-1-x-sellingPrice'><span style={{ fontSize: '24px', fontWeight: '700', lineHeight: '28px', color: '#010449', marginLeft: '33px', fontStyle: 'normal', fontFamily: '"Montserrat",sans-serif' }}>{ValCalcRoland.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span></span>
            } else {
                console.log(product)
                return <span className='vtex-product-price-1-x-sellingPrice'><span style={{ fontSize: '24px', fontWeight: '700', lineHeight: '28px', color: '#010449', marginLeft: '33px', fontStyle: 'normal', fontFamily: '"Montserrat",sans-serif' }}>{ValCalc}</span></span>
            }
        } else {
            return <span className='vtex-product-price-1-x-sellingPrice'><span style={{ fontSize: '24px', fontWeight: '700', lineHeight: '28px', color: '#010449', marginLeft: '33px', fontStyle: 'normal', fontFamily: '"Montserrat",sans-serif' }}>{productPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span></span>
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
