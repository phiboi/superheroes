CREATE TABLE Superhero
(
    id INT NOT NULL,
    name VARCHAR(40) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Superpower
(
    id INT NOT NULL,
    name VARCHAR(40) NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE SuperheroSuperpowers
(
    superheroId INT NOT NULL,
    superpowerId INT NOT NULL,
    PRIMARY KEY(superheroId, superpowerId),
    FOREIGN KEY (superheroID) REFERENCES Superhero(id),
    FOREIGN KEY (superpowerID) REFERENCES Superpower(id)
);

INSERT INTO Superhero (id, name)
VALUES (1, 'Superman');

INSERT INTO Superpower (id, name)
VALUES (1, 'Laser beam');

INSERT INTO SuperheroSuperpowers (superheroId, superpowerId)
VALUES (1, 1);

INSERT INTO Superhero (id, name)
VALUES (2, 'Captain Marvel');

INSERT INTO SuperheroSuperpowers (superheroId, superpowerId)
VALUES( 2, 1);