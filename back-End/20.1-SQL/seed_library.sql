use library;

INSERT INTO author (name) VALUES ("Kevin Mitnick");
INSERT INTO category (name) VALUES ("informatica");
INSERT INTO client (name) VALUES ("Leandro S. Gomes");
INSERT INTO book (id, name, author_id, category_id) VALUES (
	"A Arte de Invadir",
    (SELECT id FROM author WHERE name = "Kevin Mitnick"),
    (SELECT id FROM category WHERE name = "informatica")
);

INSERT INTO `library`.`book` (`name`, `author_id`, `category_id`) VALUES ('As Aventuras de Sherlock Holmes', '2', '2');
