CREATE TABLE devbyul.`User` (
	`user_idx`          INT			        NOT NULL    AUTO_INCREMENT      COMMENT '회원 인덱스',
	`email`             VARCHAR(256)		NOT NULL                        COMMENT '아이디',
	`name`              VARCHAR(32)			NOT NULL                        COMMENT '이름',
    `password`          VARCHAR(128)        NOT NULL                        COMMENT '패스워드',
    CONSTRAINT  `PK_USER`            PRIMARY KEY(`user_idx`),
    INDEX       `IDX_USER_EMAIL`     (`email`),
    INDEX       `IDX_USER_NAME`      (`name`)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
COMMENT='유저';
