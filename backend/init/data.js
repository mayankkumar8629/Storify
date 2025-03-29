const books=[
    {
        "title": "The Great Gatsby",
        "description": "A classic novel set in the Roaring Twenties.",
        "authors": ["F. Scott Fitzgerald"],
        "price": 10.99,
        "imageUrl": "https://example.com/gatsby.jpg",
        "publicationDate": "1925-04-10T00:00:00.000Z",
        "stock": 12,
        "review": [],
        "categories": ["Classic", "Fiction"]
      },
      {
        "title": "To Kill a Mockingbird",
        "description": "A novel about racial injustice in the Deep South.",
        "authors": ["Harper Lee"],
        "price": 12.50,
        "imageUrl": "https://example.com/mockingbird.jpg",
        "publicationDate": "1960-07-11T00:00:00.000Z",
        "stock": 8,
        "review": [],
        "categories": ["Classic", "Drama"]
      },
      {
        "title": "1984",
        "description": "A dystopian novel depicting a totalitarian society.",
        "authors": ["George Orwell"],
        "price": 15.00,
        "imageUrl": "https://example.com/1984.jpg",
        "publicationDate": "1949-06-08T00:00:00.000Z",
        "stock": 20,
        "review": [],
        "categories": ["Dystopian", "Fiction"]
      },
      {
        "title": "Pride and Prejudice",
        "description": "A classic romantic novel with witty commentary.",
        "authors": ["Jane Austen"],
        "price": 9.99,
        "imageUrl": "https://example.com/pride_prejudice.jpg",
        "publicationDate": "1813-01-28T00:00:00.000Z",
        "stock": 15,
        "review": [],
        "categories": ["Romance", "Classic"]
      },
      {
        "title": "The Catcher in the Rye",
        "description": "A novel about teenage alienation and angst.",
        "authors": ["J.D. Salinger"],
        "price": 11.50,
        "imageUrl": "https://example.com/catcher.jpg",
        "publicationDate": "1951-07-16T00:00:00.000Z",
        "stock": 5,
        "review": [],
        "categories": ["Classic", "Fiction"]
      },
      {
        "title": "The Hobbit",
        "description": "A fantasy adventure preceding the Lord of the Rings.",
        "authors": ["J.R.R. Tolkien"],
        "price": 14.99,
        "imageUrl": "https://example.com/hobbit.jpg",
        "publicationDate": "1937-09-21T00:00:00.000Z",
        "stock": 10,
        "review": [],
        "categories": ["Fantasy", "Adventure"]
      },
      {
        "title": "Fahrenheit 451",
        "description": "A dystopian tale about censorship and book burning.",
        "authors": ["Ray Bradbury"],
        "price": 13.50,
        "imageUrl": "https://example.com/fahrenheit451.jpg",
        "publicationDate": "1953-10-19T00:00:00.000Z",
        "stock": 7,
        "review": [],
        "categories": ["Dystopian", "Fiction"]
      },
      {
        "title": "Moby Dick",
        "description": "An epic tale of obsession and the sea.",
        "authors": ["Herman Melville"],
        "price": 16.00,
        "imageUrl": "https://example.com/mobydick.jpg",
        "publicationDate": "1851-11-14T00:00:00.000Z",
        "stock": 4,
        "review": [],
        "categories": ["Adventure", "Classic"]
      },
      {
        "title": "The Alchemist",
        "description": "A philosophical story about following your dreams.",
        "authors": ["Paulo Coelho"],
        "price": 12.99,
        "imageUrl": "https://example.com/alchemist.jpg",
        "publicationDate": "1988-04-15T00:00:00.000Z",
        "stock": 11,
        "review": [],
        "categories": ["Fiction", "Adventure"]
      },
      {
        "title": "Brave New World",
        "description": "A futuristic vision of a controlled society.",
        "authors": ["Aldous Huxley"],
        "price": 14.50,
        "imageUrl": "https://example.com/bravenewworld.jpg",
        "publicationDate": "1932-01-01T00:00:00.000Z",
        "stock": 6,
        "review": [],
        "categories": ["Dystopian", "Science Fiction"]
      },
      {
        "title": "The Lord of the Rings",
        "description": "An epic high-fantasy adventure of courage and friendship.",
        "authors": ["J.R.R. Tolkien"],
        "price": 25.00,
        "imageUrl": "https://example.com/lotr.jpg",
        "publicationDate": "1954-07-29T00:00:00.000Z",
        "stock": 3,
        "review": [],
        "categories": ["Fantasy", "Adventure"]
      },
      {
        "title": "Harry Potter and the Sorcerer's Stone",
        "description": "The first adventure in the magical world of Harry Potter.",
        "authors": ["J.K. Rowling"],
        "price": 19.99,
        "imageUrl": "https://example.com/hp1.jpg",
        "publicationDate": "1997-06-26T00:00:00.000Z",
        "stock": 18,
        "review": [],
        "categories": ["Fantasy", "Young Adult"]
      },
      {
        "title": "The Chronicles of Narnia",
        "description": "A series of fantasy novels set in a magical world.",
        "authors": ["C.S. Lewis"],
        "price": 22.99,
        "imageUrl": "https://example.com/narnia.jpg",
        "publicationDate": "1950-10-16T00:00:00.000Z",
        "stock": 9,
        "review": [],
        "categories": ["Fantasy", "Adventure"]
      },
      {
        "title": "The Da Vinci Code",
        "description": "A mystery thriller that delves into historical secrets.",
        "authors": ["Dan Brown"],
        "price": 18.50,
        "imageUrl": "https://example.com/davinci.jpg",
        "publicationDate": "2003-03-18T00:00:00.000Z",
        "stock": 14,
        "review": [],
        "categories": ["Mystery", "Thriller"]
      },
      {
        "title": "Angels & Demons",
        "description": "A fast-paced mystery intertwining art, science, and religion.",
        "authors": ["Dan Brown"],
        "price": 17.99,
        "imageUrl": "https://example.com/angels_demons.jpg",
        "publicationDate": "2000-05-03T00:00:00.000Z",
        "stock": 10,
        "review": [],
        "categories": ["Mystery", "Thriller"]
      },
      {
        "title": "The Kite Runner",
        "description": "A story of friendship and redemption set in Afghanistan.",
        "authors": ["Khaled Hosseini"],
        "price": 13.99,
        "imageUrl": "https://example.com/kiterunner.jpg",
        "publicationDate": "2003-05-29T00:00:00.000Z",
        "stock": 16,
        "review": [],
        "categories": ["Drama", "Fiction"]
      },
      {
        "title": "Animal Farm",
        "description": "A satirical allegory about the rise of power on a farm.",
        "authors": ["George Orwell"],
        "price": 9.50,
        "imageUrl": "https://example.com/animalfarm.jpg",
        "publicationDate": "1945-08-17T00:00:00.000Z",
        "stock": 12,
        "review": [],
        "categories": ["Political", "Fiction"]
      },
      {
        "title": "The Fault in Our Stars",
        "description": "A touching love story of two teenagers facing illness.",
        "authors": ["John Green"],
        "price": 14.99,
        "imageUrl": "https://example.com/faultinourstars.jpg",
        "publicationDate": "2012-01-10T00:00:00.000Z",
        "stock": 20,
        "review": [],
        "categories": ["Young Adult", "Romance"]
      },
      {
        "title": "The Girl on the Train",
        "description": "A psychological thriller with an unreliable narrator.",
        "authors": ["Paula Hawkins"],
        "price": 16.50,
        "imageUrl": "https://example.com/girlonthetrain.jpg",
        "publicationDate": "2015-01-13T00:00:00.000Z",
        "stock": 13,
        "review": [],
        "categories": ["Thriller", "Mystery"]
      },
      {
        "title": "Gone Girl",
        "description": "A dark thriller about the complexities of marriage.",
        "authors": ["Gillian Flynn"],
        "price": 17.50,
        "imageUrl": "https://example.com/gonegirl.jpg",
        "publicationDate": "2012-06-05T00:00:00.000Z",
        "stock": 8,
        "review": [],
        "categories": ["Thriller", "Mystery"]
      },
      {
        "title": "The Book Thief",
        "description": "A story about the power of books during Nazi Germany.",
        "authors": ["Markus Zusak"],
        "price": 15.75,
        "imageUrl": "https://example.com/bookthief.jpg",
        "publicationDate": "2005-03-14T00:00:00.000Z",
        "stock": 11,
        "review": [],
        "categories": ["Historical", "Fiction"]
      }
]

export default {data:books};