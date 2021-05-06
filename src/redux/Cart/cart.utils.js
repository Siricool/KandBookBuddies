export const existingCartItem = ({
    prevCartItems,
    nextCartItem
}) => {
    return prevCartItems.find( //funkar denna i native?
        cartItem => cartItem.documentID === nextCartItem.documentID
    ); 
};

export const handleAddToCart = ({
    prevCartItems,
    nextCartItem
}) => {
    const quantityIncrement = 1;
    const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });
    if (cartItemExists) {
        return prevCartItems.map(cartItem =>
            cartItem.documentID == nextCartItem.documentID
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantityIncrement
            } : cartItem
        );
    }
    return [ //when adding a new book
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        }
    ];
};

export const existingReadingItem = ({
    prevReadingItems,
    nextReadingItem
}) => {
    return prevReadingItems.find( //funkar denna i native?
        readingItem => readingItem.documentID === nextReadingItem.documentID
    ); 
};

export const handleAddToReading = ({
    prevReadingItems,
    nextReadingItem
}) => {
    const quantityIncrement = 1;
    const readingItemExists = existingReadingItem({ prevReadingItems, nextReadingItem });
    if (readingItemExists) {
        return prevReadingItems.map(readingItem =>
            readingItem.documentID == nextReadingItem.documentID
            ? {
                ...readingItem,
                quantity: readingItem.quantity + quantityIncrement
            } : readingItem
        );
    }
    return [ //when adding a new book
        ...prevReadingItems,
        {
            ...nextReadingItem,
            quantity: quantityIncrement
        }
    ];
};