create table courses
(
  id   varchar(10)    not null
    primary key,
  url  varchar(10000) null,
  name varchar(100)   null
);

create table notes
(
  id      varchar(10000) null,
  `table` varchar(10000) null,
  name    varchar(10000) null,
  url     varchar(10000) not null
);

create table tables
(
  name   varchar(10000) null,
  id     varchar(10)    not null,
  url    varchar(10000) null,
  lbase  varchar(10000) null,
  lname  varchar(10000) null,
  lurl   varchar(10000) null,
  prefix varchar(10000) null
);
