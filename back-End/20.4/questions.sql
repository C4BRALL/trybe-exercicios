USE t_19_playlist;

-- todos os registros
SELECT * FROM tracks;

-- musica de maior duração
SELECT * FROM tracks ORDER BY duration DESC LIMIT 1;

-- mais antiga
SELECT * FROM tracks ORDER BY release_date ASC LIMIT 1;

-- musica maior nome
SELECT *, length(name) AS char_qtt FROM tracks ORDER BY LENGTH(name) DESC LIMIT 1;
SELECT *, MAX(LENGTH(name)) as maior_nome FROM tracks;

-- album menor nome
SELECT *, length(album) AS char_qtt FROM tracks ORDER BY LENGTH(album) ASC LIMIT 50;

-- total de musicas
SELECT COUNT(*) AS total_de_musicas FROM tracks;

-- total de musicas tribo A
SELECT COUNT(*) as playlist_tribo_a FROM tracks WHERE tribo = "A";

-- total de musicas tribo B
SELECT COUNT(*) as playlist_tribo_b FROM tracks WHERE tribo = "B";

-- total de musicas tribo C
SELECT COUNT(*) as playlist_tribo_c FROM tracks WHERE tribo = "C";

-- quais 5 artistas mais populares da playlist da T19
SELECT artist, COUNT(*) as musics FROM tracks GROUP BY artist ORDER BY musics DESC LIMIT 5;

-- SELECT artist FROM tracks GROUP BY artist;
-- quantos artistas diferentes nos temos?
SELECT COUNT(DISTINCT(artist)) FROM tracks;

-- quais 5 artistas mais populares da playlist na tribo A
SELECT artist, COUNT(*) as musics FROM tracks WHERE tribo = "A" GROUP BY artist ORDER BY musics DESC LIMIT 5;

-- quais 5 artistas mais populares da playlist na tribo B
SELECT artist, COUNT(*) as musics FROM tracks WHERE tribo = "B" GROUP BY artist ORDER BY musics DESC LIMIT 5;

-- quais 5 artistas mais populares da playlist na tribo C
SELECT artist, COUNT(*) as musics FROM tracks WHERE tribo = "C" GROUP BY artist ORDER BY musics DESC LIMIT 5;

-- quem adicionou mais musicas no total
SELECT inserted_by, COUNT(*) as musics FROM tracks GROUP BY inserted_by ORDER BY musics DESC LIMIT 5;

-- quem adicionou mais musicas na tribo A
SELECT inserted_by, COUNT(*) as musics FROM tracks WHERE tribo = "A" GROUP BY inserted_by ORDER BY musics DESC LIMIT 5;
-- quem adicionou mais musicas na tribo B
SELECT inserted_by, COUNT(*) as musics FROM tracks WHERE tribo = "B" GROUP BY inserted_by ORDER BY musics DESC LIMIT 5;
-- quem adicionou mais musicas na tribo C
SELECT inserted_by, COUNT(*) as musics FROM tracks WHERE tribo = "C" GROUP BY inserted_by ORDER BY musics DESC LIMIT 5;

-- orderar musicas lançadas no ano de 2000 ao ano de 2010 em ordem crescente
SELECT * FROM tracks WHERE YEAR(release_date) BETWEEN '2000' AND '2010' ORDER BY release_date;


-- Quais são as 3 música com maior duração lançadas no mês de Outubro
-- duração multiplos de 3 
-- quais pessoas estudantes incluíram mais musicas no mes de maio
-- exiba as 10 primeiras músicas com menor duração e seu mês de lançamento (nome do mês)
-- tranforme o campo duration em minutos
