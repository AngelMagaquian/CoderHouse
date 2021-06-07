import './ItemListContainer.css';
import React from 'react'
import Item from '../Item/Item';

const itemList =[
    {
        name: 'Item 1',
        image: 'https://www.mayoristastecno.com.ar/wp-content/uploads/2021/04/1000x1000-Fondo-Blanco-68-200x200.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: '200'
    },
    {
        name: 'Item 2',
        image: 'https://www.casasilvia.com/media/catalog/product/cache/1/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/1/-/1-mouse-gamer-gm-510.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: '300'
    },
    {
        name: 'Item 3',
        image: 'https://www.mayoristastecno.com.ar/wp-content/uploads/2021/04/1000x1000-Fondo-Blanco-70-200x200.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: '400'
    },
    {
        name: 'Item 4',
        image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_179e27db9df%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_179e27db9df%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.4140625%22%20y%3D%2296.24375%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: '400'
    }
]

const ItemListContainer = (props) => {
    
    return (
        <div className="ItemList-container container">
            
            <div className="row">
                <div className="col-12">
                    <h1 className="ItemList-title">{props.title}</h1>
                </div>

                <div className="col-12">
                    <div className="row">
                        {itemList.map((e) => <Item 
                            name ={e.name}
                            image ={e.image}
                            desc ={e.desc}
                            price ={e.price}
                        />
                        )}
                    </div>
                   
                </div>
               

            </div>
            
            
        </div>
    )
}

export default ItemListContainer
