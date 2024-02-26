
-- 建立表
CREATE TABLE 'test'(
    'id' INT(11) NOT NULL AUTO_INCREMENT,
    'name' VARCHAR(100) NOT NULL,
    'age' INT(11) NOT NULL,
    PRIMARY KEY('id'),
    FOREIGN KEY('id') REFERENCES 'test'('id')
);


-- 建立唯一索引
