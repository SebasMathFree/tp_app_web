export class Field {
    constructor(id, name, price, rating, author, reserve) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.author = author;
        this.reserve = reserve;
    }

    static FromDisplayableField(displayableField) {
        return new Field(
            displayableField.id,
            displayableField.image,
            displayableField.name,
            displayableField.price,
            displayableField.rating,
            displayableField.author,
            displayableField.reserve
        );
    }

    static toDisplayableField(field) {
        return {
            id: field.id,
            image: field.image,
            name: field.name,
            price: field.price,
            rating: field.rating,
            author: field.author,
            reserve: field.reserve
        };
    }
}
