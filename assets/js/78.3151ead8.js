(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{504:function(s,a,n){"use strict";n.r(a);var e=n(43),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"约束-constraint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#约束-constraint"}},[s._v("#")]),s._v(" 约束（constraint）")]),s._v(" "),n("p",[s._v("什么是约束，常见的约束有哪些？")]),s._v(" "),n("p",[s._v("唯一性约束、非空性约束---\x3e保证和法性、完整性、有效性等")]),s._v(" "),n("p",[s._v("在创建表的时候，可以给表的字段添加相应的约束，添加约束的目的是为了保证表中的数据的合法性、有效性、完整性等")]),s._v(" "),n("ul",[n("li",[s._v("常见的约束有哪些？")])]),s._v(" "),n("ol",[n("li",[s._v("非空约束（not null）：字段不能为null")]),s._v(" "),n("li",[s._v("唯一约束（unique）：字段不能重复")]),s._v(" "),n("li",[s._v("主键约束（primary key）：不为null，不能重复（简称：pk）")]),s._v(" "),n("li",[s._v("外键约束（foreign key）：...（简称：fk）\n5.检查约束（check）：注意Oracle数据有有check约束，但是mysql没有，目前MySQL不支持该约束")])]),s._v(" "),n("h2",{attrs:{id:"not-null"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#not-null"}},[s._v("#")]),s._v(" not null")]),s._v(" "),n("p",[s._v("drop table if exists t_myuser;")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("create table t_myuser (\n  id int,\n  username varchar(255) not null,\n  psd varchar(255)\n)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> desc t_myuser;\n+----------+--------------+------+-----+---------+-------+\n| Field    | Type         | Null | Key | Default | Extra |\n+----------+--------------+------+-----+---------+-------+\n| id       | int(11)      | YES  |     | NULL    |       |\n| username | varchar(255) | NO   |     | NULL    |       |\n| psd      | varchar(255) | YES  |     | NULL    |       |\n+----------+--------------+------+-----+---------+-------+\n3 rows in set (0.01 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> insert into t_myuser (id,psd) values (1,'lsx');\nERROR 1364 (HY000): Field 'username' doesn't have a default value\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("insert into t_myuser (id,username,psd) values (1,'salvatore','lsx');\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> insert into t_myuser (id,username,psd) values (1,'salvatore','lsx');\nQuery OK, 1 row affected (0.02 sec)\n\nmysql> select * from t_myuser;\n+------+-----------+------+\n| id   | username  | psd  |\n+------+-----------+------+\n|    1 | salvatore | lsx  |\n+------+-----------+------+\n1 row in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"唯一性约束-unique"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#唯一性约束-unique"}},[s._v("#")]),s._v(" 唯一性约束：unique")]),s._v(" "),n("p",[s._v("唯一性约束修饰的字段具有唯一性，不能重复，但是可以为null")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> drop table t_myuser;\nQuery OK, 0 rows affected (0.03 sec)\n\nmysql> create table t_myuser(\n    -> id int,\n    -> username varchar(255) unique // 列级约束\n    -> );\nQuery OK, 0 rows affected (0.04 sec)\n\nmysql> insert into t_myuser(id,username) values(1,'salvatore');\nQuery OK, 1 row affected (0.02 sec)\n\nmysql> select * from t_myuser;\n+------+-----------+\n| id   | username  |\n+------+-----------+\n|    1 | salvatore |\n+------+-----------+\n1 row in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> insert into t_myuser(id,username) values(2,'salvatore');\nERROR 1062 (23000): Duplicate entry 'salvatore' for key 'username'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("多个字段联合起来不能重复（表级约束）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("create table t_myuser(\n  id int,\n  username varchar(255),\n  userrename varchar(255),\n  unique(username,userrename) // 表级约束\n);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("所以说：方便统一，最好直接使用表级约束，但是列级也有优势，直观")]),s._v(" "),n("p",[s._v("注意：not null 只有列级约束，没有表级约束")]),s._v(" "),n("h2",{attrs:{id:"主键约束"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主键约束"}},[s._v("#")]),s._v(" 主键约束")]),s._v(" "),n("ul",[n("li",[s._v("如何给一张表添加主键约束")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("drop table if exists t_myuser;\ncreate table t_myuser(\n  id int primary key,\n  username varchar(255),\n  email varchar(255)\n)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("insert into t_myuser values(1, 'salvatore','11@yun.com');\ninsert into t_myuser values(2, 'nick','22@yun.com');\ninsert into t_myuser values(3, 'vera','33@yun.com');\ninsert into t_myuser values(4, 'long','44@yun.com');\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from t_myuser;\n+----+-----------+------------+\n| id | username  | email      |\n+----+-----------+------------+\n|  1 | salvatore | 11@yun.com |\n|  2 | nick      | 22@yun.com |\n|  3 | vera      | 33@yun.com |\n|  4 | long      | 44@yun.com |\n+----+-----------+------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> insert into t_myuser values(1, 'rose','44@yun.com');\nERROR 1062 (23000): Duplicate entry '1' for key 'PRIMARY'\n\nmysql> insert into t_myuser(username,email) values ('rose','55@yun.com');\nERROR 1364 (HY000): Field 'id' doesn't have a default value\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("添加组件约束之后，不能重复也不能为空")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("create table t_myuser(\n  id int,\n  username varchar(255),\n  email varchar(255),\n  primary key(id) // 表级约束\n)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("主键相关的术语：主键约束（primary）、主键字段（id）、主键值（1、2、3、4）")])]),s._v(" "),n("li",[n("p",[s._v("主键有什么作用？")]),s._v(" "),n("ol",[n("li",[s._v("表的设计三范式中有要求，第一范式就要求任何一张表都有主键")]),s._v(" "),n("li",[s._v("主键的作用：主键值是这行记录在这张表当中的唯一标识。（就像一个人的身份证号一样）")])])]),s._v(" "),n("li",[n("p",[s._v("主键分类？")]),s._v(" "),n("ol",[n("li",[s._v("根据主键的字段的字段数量来划分：")])]),s._v(" "),n("p",[s._v("单一主键（推荐使用，常用的）")]),s._v(" "),n("p",[s._v("复合主键（多个字段联合起来添加一个主键约束）（不建议使用，因为复合主键违背三范式）")]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("根据主键性质来划分：")])]),s._v(" "),n("p",[s._v("自然主键：主键值最好是一个和业务没什么关系的值（推荐使用）")]),s._v(" "),n("p",[s._v("业务主键：主键值和系统的业务挂钩，例如：银行卡号、身份证号（不推荐使用，最好不要拿着和业务挂钩的字段作为主键。因为以后的业务一旦发生改变，主键值可能也需要发生改变）")])]),s._v(" "),n("li",[n("p",[s._v("****** 一张表的主键约束只能有一个 ******")])]),s._v(" "),n("li",[n("p",[s._v("mysql提供主键自增（auto_increment）")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("drop table if exists t_myuser;\ncreate table t_myuser(\n  id int primary key auto_increment,\n  username varchar(255),\n  email varchar(255)\n)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("insert into t_myuser(username,email) values('salvatore','11@yun.com');\ninsert into t_myuser(username,email) values('nick','22@yun.com');\ninsert into t_myuser(username,email) values('vera','33@yun.com');\ninsert into t_myuser(username,email) values('long','44@yun.com');\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("Oracle也提供了一种自增机制，叫做序列（sequence）对象")]),s._v(" "),n("h2",{attrs:{id:"外键约束"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#外键约束"}},[s._v("#")]),s._v(" 外键约束")]),s._v(" "),n("ul",[n("li",[s._v("外键约束的相关术语：")])]),s._v(" "),n("ol",[n("li",[s._v("外键约束（foreign key）")]),s._v(" "),n("li",[s._v("外键字段：添加有外键约束的字段")]),s._v(" "),n("li",[s._v("外键值：外间字段对应的每一个值")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from t_class;\n+-----+------------------+\n| cno | cname            |\n+-----+------------------+\n| 101 | xxxxxxxxxxxxxxxx |\n| 102 | yyyyyyyyyyyyyyyy |\n+-----+------------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from t_student;\n+------+-------+---------+\n| sno  | sname | classno |\n+------+-------+---------+\n|    1 | zs1   |     101 |\n|    2 | zs2   |     101 |\n|    3 | zs3   |     102 |\n|    4 | zs4   |     102 |\n|    5 | zs5   |     102 |\n|    6 | zs6   |     102 |\n+------+-------+---------+\n6 rows in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("ul",[n("li",[s._v("将以上表的建表语句写出来：")])]),s._v(" "),n("p",[s._v("t_student中的classno字段引用t_class表中的cno字段，此时t_student表叫做子表。t_class表叫做父表")]),s._v(" "),n("ul",[n("li",[s._v("添加数据的时候先添加父表，再添加子表")]),s._v(" "),n("li",[s._v("删除数据的时候先删除子表，再删除父表")]),s._v(" "),n("li",[s._v("创建表的时候先创建父表，再创建子表")]),s._v(" "),n("li",[s._v("删除表的时候先删除子表，再删除父表")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("drop table if exists t_student;\n\ndrop table if exists t_class;\n\ncreate table t_class(\n  cno int,\n  cname varchar(255),\n  primary key(cno)\n);\n\ncreate table t_student(\n  sno int,\n  sname varchar(255),\n  classno int,\n  primary key(sno),\n  foreign key(classno) references t_class(cno)\n);\n\ninsert into t_class values (101,'xxxxxxxxxx'),(102,'yyyyyyyyyy');\ninsert into t_student values \n(1,'salvatore1',101),\n(2,'salvatore2',102),\n(3,'salvatore3',102),\n(4,'salvatore4',101),\n(5,'salvatore5',102),\n(6,'salvatore6',101);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> inser into t_student values (1,'liaoxuan',103);\nERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'inser into t_student values (1,'liaoxuan',103)' at line 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("表的外键值只能是所依赖的外键字段所对因的字段的值的集合中的一个")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("外键是是否可以为null？可以为null")])]),s._v(" "),n("li",[n("p",[s._v("外键字段引用的字段必须是主键吗？不是，但是引用的字段必须是具有唯一性（unique约束）的")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);