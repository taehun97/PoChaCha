-- INSERT INTO cell (status, name, time) VALUES ("E", "한 칸 앞으로 이동", 3);
--INSERT INTO cell (status, name, time) VALUES ("E", "한 칸 뒤로 이동", 3);
--INSERT INTO cell (status, name, time) VALUES ("E", "두 칸 앞으로 이동", 3);
--INSERT INTO cell (status, name, time) VALUES ("E", "두 칸 뒤로 이동", 3);
--INSERT INTO cell (status, name, time) VALUES ("E", "벌칙 제거 (없으면 까비)", 3);
--INSERT INTO cell (status, name, time) VALUES ("E", "한 턴 영어 금지", 3);
--INSERT INTO cell (status, name, time) VALUES ("E", "한 턴 안주 금지", 3);
INSERT INTO cell (status, name, time) VALUES ("P", "목소리 변조 벌칙", 3);
--INSERT INTO cell (status, name, time) VALUES ("P", "페이스 필터 벌칙", 3);
--INSERT INTO cell (status, name, time) VALUES ("G", "걸린 사람 빼고 원샷", 60);
--INSERT INTO cell (status, name, time) VALUES ("B", "원샷", 60);
--INSERT INTO cell (status, name, time) VALUES ("B", "건배사", 120);
--INSERT INTO cell (status, name, time) VALUES ("B", "물 1L 마시기", 180);
--INSERT INTO cell (status, name, time) VALUES ("G", "한 명 지목해서 같이 원샷", 60);
--INSERT INTO cell (status, name, time) VALUES ("B", "코끼리코 52바퀴", 300);
--INSERT INTO cell (status, name, time) VALUES ("B", "웃긴 썰 풀기", 120);
--INSERT INTO cell (status, name, time) VALUES ("B", "파워댄스", 120);
--INSERT INTO cell (status, name, time) VALUES ("B", "카메라를 향해 뽀뽀", 60);
--INSERT INTO cell (status, name, time) VALUES ("B", "다 함께 원샷", 60);
--INSERT INTO cell (status, name, time) VALUES ("B", "성대모사", 120);
--INSERT INTO cell (status, name, time) VALUES ("B", "지금 바로 한잔 마시기", 60);

INSERT INTO minigame (name, winner_cnt, time, tagger) VALUES ("두더지 게임", 4, 60, 0);
INSERT INTO minigame (name, winner_cnt, time, tagger) VALUES ("라이어 게임", 3, 0, 1);
INSERT INTO minigame (name, winner_cnt, time, tagger) VALUES ("훈민정음", 3, 60, 0);
