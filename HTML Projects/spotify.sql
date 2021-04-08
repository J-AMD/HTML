create table cancion(
	id_cancion int not null auto_increment,
	id_artista int not null,
	nombre varchar(250) not null,
	duracion int not null,
	activo tinyint not null default 1,
	fecha_registro datetime not null,
	constraint PK_Cancion primary key(id_cancion)
	);

create table artista(id_artista int not null auto_increment,
	nombre varchar(50) not null,
	resumen varchar(250),
	genero varchar(50) not null
	imagen_url varchar(250) not null
	ativo tinyint not null default 1,
	fecha_registro datetime not null,
	constraint PK_Artista primary key(id_artista)
	);

create table album(id_album int not null auto_increment,
	id_artista int not null,
	titulo varchar(50) not null,
	num_canciones tinyint not null,
	anio tinyint not null,
	imagen_url varchar(250) not null,
	activo tinyint not null default 1,
	fecha_registro datetime not null,
	constraint PK_Album primary key(id_album));

create table artista_cancion(id_artista_cancion int not null auto_increment,
	id_artista int not null,
	id_cancion int not null,
	activo tinyint not null default 1,
	fecha_registro datetime not null,
	constraint PK_Artista_Cancion primay key(id_artista_cancion));

create table artista_album(id_artista_album int not null auto_increment,
	id_artista int not null,
	id_album int not null,
	activo tinyint not null default 1,
	fecha_registro datetime not null,
	constraint PK_Artista_Album primary key(id_artista_album));

CREATE TABLE `musicalist`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nick` VARCHAR(30) NULL,
  `nombre` VARCHAR(30) NOT NULL,
  `apellidos` VARCHAR(30) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `contraseña` VARCHAR(256) NOT NULL,
  `activo` TINYINT NOT NULL,
  `fecha_registro` DATETIME NOT NULL,
  PRIMARY KEY (`id_usuario`));