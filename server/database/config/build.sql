BEGIN;

DROP TABLE IF EXISTS users, posts, comments, votes, categories, category_post CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    img VARCHAR(500) DEFAULT 'https://drive.google.com/file/d/1-E3EC9ilSq_sgV9xjixjuiv8uL5n0i7D/view?usp=sharing'
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    img TEXT,
    content TEXT NOT NULL,
    creation_time DATE NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    creation_time DATE NOT NULL,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE votes (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    vote INT NOT NULL DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    color VARCHAR(100) DEFAULT 'blue'
);

CREATE TABLE category_post (
    id SERIAL PRIMARY KEY,
    post_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO users(username, email, password, img)
    VALUES('Mai', 'mai@gmail.com', '123456789', 'https://avatars.githubusercontent.com/u/79872538?v=4'), 
    ('Karam', 'karam@gmail.com', '85136497', 'https://avatars.githubusercontent.com/u/63299107?v=4');

INSERT INTO posts(img, content, creation_time, user_id)
    VALUES('https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/305214510_5398468983566787_3856778627955621441_n.jpg?stp=dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lY4h2H9Jxv0AX_PNtoF&tn=qBft96MhCCNnHkUu&_nc_ht=scontent.fjrs10-1.fna&oh=00_AT9csiAfiI5e1jDX-W5uRfYRWVtFRWZwqkYWGFuSdP-fPA&oe=631AA82E', 'Post content 1', '2022-05-22', 1),
    ('https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/302299283_5383940685019617_7904121325063573552_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=eaqsbP5y4q4AX9trQHE&_nc_ht=scontent.fjrs10-1.fna&oh=00_AT89Qc9lkqdN1TUbbea3XRCtz15gjvyFbUKHoXGJhPMC8w&oe=631AAE1A', 'Post content 2', '2020-07-16', 1);


INSERT INTO comments (content, creation_time, user_id, post_id)
    VALUES('Comment content 1', '2022-05-22', 1, 1),
    ('Comment content 1', '2020-07-16', 2, 2);

INSERT INTO votes(user_id, post_id, vote)
    VALUES(1, 2, 1),
    (2, 1, 1);

INSERT INTO categories(name, color) 
    VALUES('news', 'red'),
    ('Economie', 'orange');

INSERT INTO category_post(post_id, category_id) 
    VALUES(1, 2), 
    (1, 2);

COMMIT;