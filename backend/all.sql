-- 유저
create table users (
    student_id varchar(10) not null primary key,
    grade integer not null, 
    class varchar(1) not null,
    name varchar(5) not null,
    password varchar(50) not null,
    create_at timestamp default current_timestamp not null
)

-- 질문방
create table chatroom (
    id int auto_increment primary key not null,
    user_student_id varchar(10) not null,
    create_at timestamp default current_timestamp not null,

    foreign key (user_student_id) references users(student_id) on delete cascade
)

-- 질문목록
create table question (
    chatroom_id int not null,
    user_student_id varchar(10) not null,
    question varchar(200) not null,
    answer varchar not null,
    create_at timestamp default current_timestamp not null,

    foreign key (user_student_id) references users(id) on delete cascade,
    foreign key (chatroom_id) references chatroom(id) on delete cascade
) 