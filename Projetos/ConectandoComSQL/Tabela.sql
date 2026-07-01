create database escola;
use escola;

create table cursos(
    id integer primary key auto_increment,
    nome varchar(100) not null
);

insert into cursos(nome) values ("Node JS"),("JavaScript"),("React Native");
INSERT INTO cursos (nome) VALUES ("Java"), ("Python");

SELECT * from cursos;
