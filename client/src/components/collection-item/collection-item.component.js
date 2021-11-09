import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import { AddButton, BackgroundImage, CollectionFooterContainer, CollectionItemContainer } from './collection-item.styles';

function CollectionItem({ item, addItem }) {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem)
