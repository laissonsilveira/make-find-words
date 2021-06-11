# find-word

Find or make an word by rules and dicionary informaded (`./dic` contains pt_BR words by amount of chars)

## run

![Help command](doc/help_command.png)

## example FIND

    ❯ ./words -f -n 5 -l beltrco
    Found '43' word(s): beber, berre, berro, bloco, borre, borro, breco, broco, brote, broto, cerco, cerol, cerre, cerro, certo, cetro, clero, cloro, cobre, cobro, coroe, corre, corro, corte, corto, ereto, lebre, obter, reboe, reler, reter, tecer, tecle, teclo, torce, torre, torro, torto, treco, troce, troco, trote, troto

    ❯ ./words -f -n 5 -l beltrco -s b
    Found '10' word(s):  beber, berre, berro, bloco, borre, borro, breco, broco, brote, broto

    ❯ ./words -f -n 5 -l beltrco -s b -e o
    Found '6' word(s):  berro, bloco, borro, breco, broco, broto

    ❯ ./words -f -n 5 -l beltrco -s b -e o -a 5
    Found '1' word(s):  breco

## example MAKE

    ❯ ./words -m -n 2 -l abc
    Created '9' word(s):  aa, ab, ac, ba, bb, bc, ca, cb, cc