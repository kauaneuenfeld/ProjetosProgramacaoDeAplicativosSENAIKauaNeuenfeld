create database agencia_viagens;

use agencia_viagens;

create table destinos(
    id int auto_increment primary key,
    nome_destino varchar(100) not null,
    pais_destino varchar(100) not null
);

insert into destinos(nome_destino, pais_destino)
values('Paris', 'França'),
('Tokyo', 'Japão'),
('Roma', 'Itália');

select * from destinos;
