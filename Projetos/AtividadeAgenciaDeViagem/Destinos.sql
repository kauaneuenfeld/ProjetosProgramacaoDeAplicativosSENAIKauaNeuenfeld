create database agencia_viagens;

use agencia_viagens;

create table destinos(
    id int auto_increment primary key,
    nome_destino varchar(100) not null,
    pais_destino varchar(100) not null
);

create table clientes(
    id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null,
    telefone varchar(100) not null
    );

create table reservas(
    id int auto_increment primary key,
    id_cliente int not null,
    id_destino int not null,
    data_viagem date not null,
    foreign key (id_cliente) references clientes(id),
    foreign key (id_destino) references destinos(id) 
);

insert into destinos(nome_destino, pais_destino)
values('Paris', 'França'),
('Tokyo', 'Japão'),
('Roma', 'Itália');

insert into clientes(nome, email, telefone)
values('Kaua', 'kaua@gmail.com', '11 99999-9999'),
('Miguel', 'miguel@gmail.com', '11 99999-9999'),
('Neuenfeld', 'neuenfeld@gmail.com', '11 99999-9999');

insert into reservas(id_cliente, id_destino, data_viagem)
values(1, 1, '2022-10-25'),
(2, 2, '2023-08-01'),
(3, 3, '2024-01-08');

select * from destinos;

select * from clientes;

select * from reservas;
